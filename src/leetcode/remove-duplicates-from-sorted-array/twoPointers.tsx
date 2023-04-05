import React from 'react';
import { useVisualizerData, VArray, VField } from 'visualizer';
import {
  red,
  indigo,
  amber,
  pink,
  lightGreen,
  deepPurple,
  transform,
} from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { left, right, nums = [] } = data;
  const range = [nums.at(0), nums.at(nums.length / 2), nums.at(-1)];
  const colorArr = [red[300], amber[300], lightGreen[300]];
  const interpolateColor = transform(range, colorArr);
  const test = type === 'testExpressionSuccess';

  return (
    <>
      <VField y={0} label="k" value={left} />
      <VArray
        y={50}
        value={nums}
        highlightRange={right === nums.length && [0, left - 1, pink[700]]}
        pointers={[
          { name: 'left', value: left, color: indigo[500] },
          { name: 'right', value: right, color: deepPurple[500] },
        ]}
        getElementStyle={(value, i, style) => {
          style.background = interpolateColor(value);

          if (
            expression === 'nums[right] !== nums[right - 1]' &&
            (i === right || i === right - 1)
          ) {
            style.background = test ? lightGreen[500] : red[500];
          }

          return style;
        }}
      />
    </>
  );
};
