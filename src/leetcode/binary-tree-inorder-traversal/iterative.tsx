import React from 'react';
import {
  useVisualizerData,
  useTestCase,
  VArray,
  VStack,
  VTree,
  VC,
} from 'visualizer';
import { red, green, amber, lightGreen, teal } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const testCase = useTestCase();
  const { root, results = [], stack = [], node } = data;
  const padding = 30;

  return (
    <>
      <VArray value={results} />
      <VStack
        y={VC.Array.ItemSize + padding}
        value={stack}
        length={testCase.root.filter((e) => e !== null).length}
      />
      <VTree
        y={VC.Array.ItemSize * 2 + padding * 3}
        value={root}
        pointers={[
          {
            name: 'root',
            value: root,
            color: teal['500'],
          },
          {
            name: 'node',
            value: node,
            color: amber['500'],
            highlight: true,
          },
        ]}
      />
    </>
  );
};
