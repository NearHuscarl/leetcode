import React from 'react';
import { useVisualizerData, useTestCase, VString } from 'visualizer';
import { red, yellow, blue, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { s: sParam } = useTestCase();
  const { validStr, left, right } = data;
  const test = type === 'testExpressionSuccess';

  return (
    <VString
      value={(validStr ?? sParam) as string}
      pointers={[
        { name: 'left', value: left, color: red[500] },
        { name: 'right', value: right, color: blue[500] },
      ]}
      getElementStyle={(e, i, style) => {
        const checkExpression =
          expression === 'validStr[left] !== validStr[right]';

        const isAlphaNumeric = /^[a-z0-9]+$/i.test(e);
        style.background = isAlphaNumeric ? yellow[100] : red[100];

        if (checkExpression && (i === left || i === right)) {
          style.background = !test ? lightGreen[500] : red[500];
          style.color = '#ffffff';
        }
        return style;
      }}
    />
  );
};
