import React from 'react';
import { useVisualizerData, VArray } from 'visualizer';
import { red, yellow, blue, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { s, left, right } = data;

  return (
    <VArray
      value={s}
      pointers={[
        { name: 'left', value: left, color: red[500] },
        { name: 'right', value: right, color: blue[500] },
      ]}
    />
  );
};
