import React from 'react';
import { useVisualizerData, VArray, VTree } from 'visualizer';
import { red, green, amber, lightGreen, teal, transform } from 'colors';

const interpolateColor = transform([1, 6], [amber[200], amber[900]]);

export const Visualizer = () => {
  const { data, expression, type, treeNodes, callStack } = useVisualizerData();
  const { root, results = [], node } = data;

  return (
    <>
      <VArray value={results} />
      <VTree
        nodes={treeNodes}
        getNode={(n, nodeLookup) => {
          if (n.references.has('node')) {
            if (expression === 'inorder(node.left)') {
              const left = nodeLookup[n.children[0]];
              if (left) {
                left.bgColor = green[400];
              } else {
                n.bgColor = red[500];
              }
            }
            if (expression === 'inorder(node.right)') {
              const right = nodeLookup[n.children[1]];
              if (right) {
                right.bgColor = green[400];
              } else {
                n.bgColor = red[500];
              }
            }
          }

          callStack.forEach(({ params }, i) => {
            if (params[0].id === n.id) {
              n.bgColor = interpolateColor(i);
            }
          });
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
