import React from 'react';
import { useVisualizerData, VTree } from 'visualizer';
import { red, green, amber, lightGreen, teal } from 'colors';

export const Visualizer = () => {
  const { data, expression, type, treeNodes } = useVisualizerData();
  const { root } = data;

  return (
    <VTree
      nodes={treeNodes}
      pointers={[
        {
          name: 'root',
          value: root,
          color: teal['500'],
        },
      ]}
    />
  );
};
