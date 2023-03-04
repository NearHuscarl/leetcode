import React from 'react';
import { useVisualizerData, useTestCase, VArray, VStack } from 'visualizer';
import { red, lightGreen, teal, amber, blue } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { s: sParam } = useTestCase();
  const { s = '', i, stack } = data;
  const openParenSet = new Set(['(', '{', '[']);
  const matchParenExpr = expression === 'stack.at(-1) === openParenLookup[chr]';
  const test = type === 'testExpressionSuccess';

  return (
    <>
      <VArray
        value={s}
        pointers={[{ name: 'i', value: i, color: blue[800] }]}
        getElementStyle={(value, i2, style) => {
          style.background = openParenSet.has(value)
            ? lightGreen[100]
            : red[100];

          if (matchParenExpr && i === i2) {
            style.background = test ? lightGreen[500] : red[500];
            style.color = '#ffffff';
          }
          return style;
        }}
      />
      <VStack
        y={80}
        value={stack}
        length={sParam.length}
        getElementStyle={(_, i2, style) => {
          if (matchParenExpr && i2 === stack.length - 1) {
            style.background = test ? lightGreen[500] : red[500];
            style.color = '#ffffff';
          }

          return style;
        }}
      />
    </>
  );
};
