import React from 'react';
import { useVisualizerData, VLineChart, VC, VField } from 'visualizer';
import { red, green, amber, lightGreen, blue, teal } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { prices, left, right, maxProfit } = data;
  const checkExpr = expression === 'prices[left] > prices[right]';
  const test = type === 'testExpressionSuccess';

  return (
    <>
      <VField
        x={180}
        y={50}
        label="maxProfit"
        value={maxProfit}
        color={lightGreen[500]}
      />
      <VLineChart
        y={VC.LineChart.Height + 120}
        value={prices}
        labels={['Index', 'Price']}
        getLineStyle={([y1, y2], x, style) => {
          style.color = y1 < y2 ? lightGreen[600] : red[600];
          return style;
        }}
        xRange={checkExpr && [left, right, test ? red[100] : lightGreen[100]]}
        xPointers={[
          { name: 'left', value: left, color: amber[500] },
          { name: 'right', value: right, color: blue[500] },
        ]}
      />
    </>
  );
};
