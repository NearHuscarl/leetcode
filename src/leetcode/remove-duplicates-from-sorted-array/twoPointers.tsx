import React from 'react';
import { useVisualizerData, VArray, VTree } from 'visualizer';
import { red, green, amber, lightGreen, teal, transform } from 'colors';

const interpolateColor = transform([1, 6], [amber[200], amber[900]]);

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const {} = data;

  return null;
};
