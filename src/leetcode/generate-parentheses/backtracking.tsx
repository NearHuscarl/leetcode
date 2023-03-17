import React from 'react';
import {
  useVisualizerData,
  useTestCase,
  VStack,
  VRecursiveTree,
  VSet,
  VC,
} from 'visualizer';
import { red, yellow, amber, purple, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type, callStack } = useVisualizerData();
  const { n } = useTestCase();
  const { stack, res } = data;

  return (
    <>
      <VStack value={stack} length={2 * n} />
      <VRecursiveTree
        trackedFn="backtrack"
        getNodeValue={(step) => step.watch.local.stack.join('')}
        onVisitNode={(node) => {
          node.color = node.bgColor;
          node.fontWeight = 600;
          node.borderColor = '#ffffff';
          node.bgColor = '#ffffff';

          return node;
        }}
      />
      <VSet
        y={VC.Array.ItemSize + 50}
        label="res"
        value={res}
        width={n * 15 + 10}
      />
    </>
  );
};
