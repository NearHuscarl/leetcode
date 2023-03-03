import React from 'react';
import { useVisualizerData, useTestCase, VArray, VStack } from 'visualizer';
import { red, yellow, blue, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { s: sParam = [] } = useTestCase();
  const { s, stack } = data;

  return (
    <>
      <VArray y={0} value={s} />
      <VStack y={50} value={stack} length={sParam.length} />
    </>
  );
};
