import React from 'react';
import { useVisualizerData, VArray, VTree } from 'visualizer';
import { red, green, amber, lightGreen, teal, transform } from 'colors';

const interpolateColor = transform([1, 6], [amber[200], amber[900]]);

export const Visualizer = () => {
  const { data, expression, type, callStack } = useVisualizerData();
  const { root, results = [], node } = data;

  return (
    <>
      <VArray value={results} />
      <VTree
        value={root}
        getNode={(n) => {
          if (n.references.has('node')) {
            if (expression === 'inorder(node.left)') {
              const left = n.children[0];
              if (left) {
                left.style.bgColor = green[400];
              } else {
                n.style.bgColor = red[500];
              }
            }
            if (expression === 'inorder(node.right)') {
              const right = n.children[1];
              if (right) {
                right.style.bgColor = green[400];
              } else {
                n.style.bgColor = red[500];
              }
            }
          }

          callStack.forEach(({ params }, i) => {
            if (params[0].id === n.id) {
              n.style.bgColor = interpolateColor(i);
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
          },
        ]}
      />
    </>
  );
};
