import React from 'react';
import { useVisualizerData, VArray, VSet, VC } from 'visualizer';
import { red, green, amber, lightGreen, teal } from 'colors';

export const Visualizer = () => {
  const { data, expression, type, treeNodes } = useVisualizerData();
  const { left, right, nums, window } = data;
  const checkKeyExpr = expression === 'window.has(nums[right])';
  const checkLenExpr = expression === 'right - left > k';
  const test = type === 'testExpressionSuccess';

  return (
    <>
      <VArray
        x={VC.Array.ItemSize + 30}
        value={nums}
        highlightRange={[
          left,
          right,
          checkLenExpr && test ? red[500] : amber[500],
        ]}
        getElementStyle={(e, i, style) => {
          if (checkKeyExpr && i === right) {
            style.background = test ? lightGreen[500] : red[500];
            style.color = '#ffffff';
          }
          return style;
        }}
      />
      <VSet
        value={window}
        getElementStyle={(e, style) => {
          if (checkKeyExpr) {
            if (test) {
              if (e === +nums[right]) {
                style.background = lightGreen[500];
                style.color = '#ffffff';
              }
            } else {
              style.background = red[500];
              style.color = '#ffffff';
            }
          }
          return style;
        }}
      />
    </>
  );
};
