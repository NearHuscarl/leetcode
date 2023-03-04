import React from 'react';
import { useVisualizerData, VArray, VStack, VTree, VC } from 'visualizer';
import { red, green, amber, lightGreen, teal } from 'colors';

export const Visualizer = () => {
  const { data, expression, type, treeNodes, treeNodeCount } =
    useVisualizerData();
  const { root, results = [], stack = [], node } = data;
  const padding = 30;

  return (
    <>
      <VArray value={results.map((n) => n.val)} />
      <VStack
        y={VC.Array.ItemSize + padding}
        value={stack.map((n) => n.val)}
        length={treeNodeCount}
      />
      <VTree
        y={VC.Array.ItemSize * 2 + padding * 3}
        nodes={treeNodes}
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
