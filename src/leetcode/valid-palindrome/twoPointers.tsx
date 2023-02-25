import React from 'react';
import { useVisualizerData, VArray } from 'visualizer';
import {
  red,
  orange,
  yellow,
  green,
  blue,
  cyan,
  purple,
  transform,
} from 'colors';

const l = 40; // space
const h = 126; // ~
const r = h - l;
const interpolateColor = transform(
  [
    l,
    l + (r * 1) / 6,
    l + (r * 2) / 6,
    l + (r * 3) / 6,
    l + (r * 4) / 6,
    l + (r * 5) / 6,
    h,
  ],
  [
    red[500],
    orange[500],
    yellow[500],
    green[500],
    blue[500],
    cyan[500],
    purple[500],
  ]
);

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { s = '', normalizedStr = '', left, right } = data;
  const test = type === 'testExpressionSuccess';

  return (
    <>
      <VArray
        value={
          (normalizedStr ? normalizedStr.split('') : s.split('')) as string[]
        }
        pointers={[
          { name: 'left', value: left, color: red[500] },
          { name: 'right', value: right, color: blue[500] },
        ]}
        getElementStyle={(e, i, style) => {
          style.background = interpolateColor(e.charCodeAt(0));
          const checkExpression =
            expression === 'normalizedStr[left] !== normalizedStr[right]';

          if (checkExpression && (i === left || i === right)) {
            style.background = !test ? green[500] : red[500];
            style.color = '#ffffff';
          }
          return style;
        }}
      />
    </>
  );
};
