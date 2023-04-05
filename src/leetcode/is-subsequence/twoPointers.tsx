import React from 'react';
import { useVisualizerData, VArray, VC } from 'visualizer';
import { red, green, amber, lightGreen, teal, transform } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { s = [], t, sPointer, tPointer } = data;
  const test = type === 'testExpressionSuccess';

  return (
    <>
      <VArray
        value={t}
        label="t"
        pointers={[{ name: 'i', value: tPointer, color: red[500] }]}
        getElementStyle={(value, i, style) => {
          if (expression === 's[sPointer] === t[tPointer]' && i === tPointer) {
            style.background = test ? lightGreen[500] : red[500];
            style.color = '#ffffff';
          }
          return style;
        }}
      />
      <VArray
        y={VC.Array.ItemSize + 50}
        value={s}
        label="s"
        pointers={[{ name: 'i', value: sPointer, color: red[500] }]}
        getElementStyle={(value, i, style) => {
          if (expression === 's[sPointer] === t[tPointer]' && i === sPointer) {
            style.background = test ? lightGreen[500] : red[500];
            style.color = '#ffffff';
          }
          return style;
        }}
        highlightRange={
          sPointer === s.length && [0, sPointer - 1, lightGreen[500]]
        }
      />
    </>
  );
};
