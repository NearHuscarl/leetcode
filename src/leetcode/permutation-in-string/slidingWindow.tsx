import React from 'react';
import { useVisualizerData, VC, VArray, VLookupTable } from 'visualizer';
import { red, amber, lightGreen, blue } from 'colors';

export const Visualizer = () => {
  const { data, type, expression } = useVisualizerData();
  const { s1 = '', s2, i, left, right, s1Freq, s2Freq } = data;
  const x2 = VC.Array.ItemSize * s1.length + 60;
  const test = type === 'testExpressionSuccess';
  const checkFreqExpr = expression === '_sameFreq(s1Freq, s2Freq)';

  return (
    <>
      <VArray
        y={40}
        value={s1}
        label="s1"
        pointers={[{ name: 'i', value: i, color: blue[500] }]}
        getElementStyle={(e, i, style) => {
          if (checkFreqExpr) {
            style.background = test ? lightGreen[500] : red[500];
            style.color = '#ffffff';
          }
          return style;
        }}
      />
      <VArray
        y={40}
        x={x2}
        value={s2}
        label="s2"
        pointers={[
          { name: 'left', value: left, color: red[500] },
          { name: 'right', value: right, color: amber[500] },
          { name: 'i', value: i, color: blue[500] },
        ]}
        getElementStyle={(e, i, style) => {
          if (checkFreqExpr && i >= left && i <= right) {
            style.background = test ? lightGreen[500] : red[500];
            style.color = '#ffffff';
          }
          return style;
        }}
      />
      <VLookupTable y={160} value={s1Freq} header={['Key', 'Freq']} />
      <VLookupTable y={160} value={s2Freq} x={x2} header={['Key', 'Freq']} />
    </>
  );
};
