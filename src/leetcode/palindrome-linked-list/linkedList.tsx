import React from 'react';
import { useVisualizerData, VLinkedList, VArray } from 'visualizer';
import { red, amber, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, type, expression, listNodes } = useVisualizerData();
  const { array = [], left, right, head, cur } = data;

  return null;
};
