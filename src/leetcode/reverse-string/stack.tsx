import React from 'react';
import { useVisualizerData, VArray } from 'visualizer';
import { red, yellow, blue, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { s, left, right } = data;

  return null;
};
