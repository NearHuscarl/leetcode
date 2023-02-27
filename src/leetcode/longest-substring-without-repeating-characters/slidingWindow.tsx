import React from 'react';
import { useVisualizerData, VArray, VSet } from 'visualizer';
import { red, yellow, blue, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { s, left, right, set, maxLength } = data;
  const test = type === 'testExpressionSuccess';
  const isCheckSetExpression = expression === 'set.has(s[right])';

  return (
    <>
      <VArray
        x={65}
        y={50}
        label={`s, maxLength=${maxLength ?? 0}`}
        value={s}
        highlightRange={[left, right, lightGreen[500]]}
        getElementStyle={(e, i, style) => {
          const inRange = left <= i && i <= right;

          if (isCheckSetExpression && inRange) {
            if (test) {
              if (e === s[right]) {
                style.background = red[500];
                style.color = '#ffffff';
              }
            } else {
              style.background = lightGreen[100];
            }
          }
          return style;
        }}
      />
      <VSet
        y={50}
        value={set}
        label="set"
        getElementStyle={(value, style) => {
          if (isCheckSetExpression && s[right] === value) {
            style.background = red[500];
            style.color = '#ffffff';
          }
          return style;
        }}
      />
    </>
  );
};
