import React from 'react';
import { useVisualizerData, VArray, VField } from 'visualizer';
import {
  red,
  indigo,
  amber,
  blue,
  lightGreen,
  deepPurple,
  transform,
} from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { nums, left, right } = data;
  const test = type === 'testExpressionSuccess';

  return (
    <VArray
      value={nums}
      pointers={[
        { name: 'left', value: left, color: indigo[500] },
        { name: 'right', value: right, color: amber[500] },
      ]}
      getElementStyle={(v, i, style) => {
        if (
          expression === 'nums[right] === nums[right + 1]' &&
          (i === right || i === right + 1)
        ) {
          style.background = test ? lightGreen[500] : red[500];
        }

        return style;
      }}
    />
  );
};
