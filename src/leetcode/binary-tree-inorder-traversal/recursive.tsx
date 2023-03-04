import React from 'react';
import { useVisualizerData, VArray, VTree } from 'visualizer';
import { red, green, amber, lightGreen, teal } from 'colors';

export const Visualizer = () => {
  const { data, expression, type, treeNodes } = useVisualizerData();
  const { root, results = [], node } = data;

  return (
    <>
      <VArray value={results} />
      <VTree
        nodes={treeNodes}
        getNode={(n, nodeLookup) => {
          if (!n.references.has('node')) return;
          if (expression === 'inorder(node.left)') {
            const left = nodeLookup[n.children[0]];
            if (left) {
              left.color = green[400];
            } else {
              n.color = red[500];
            }
          }
          if (expression === 'inorder(node.right)') {
            const right = nodeLookup[n.children[1]];
            if (right) {
              right.color = green[400];
            } else {
              n.color = red[500];
            }
          }
          return n;
        }}
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
