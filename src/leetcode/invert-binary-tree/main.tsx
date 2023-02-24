import React from 'react';
import { useVisualizerData, VTree } from 'visualizer';
import { red, green, amber, lightGreen, teal, transform } from 'colors';

const interpolate = transform(
  [0, 0.5, 1],
  [red[500], amber[500], lightGreen[500]]
);

export const Visualizer = () => {
  const { data, expression, type, treeNodes } = useVisualizerData();
  const { root, node } = data;
  let minX = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  const colorLookupRef = React.useRef({});
  const nodesRef = React.useRef(0);

  const nodeCount = Object.keys(treeNodes).length;
  if (nodeCount !== nodesRef.current) {
    nodesRef.current = nodeCount;
    colorLookupRef.current = {};
  }

  return (
    <VTree
      nodes={treeNodes}
      getNode={(n) => {
        if (n.tx < minX) minX = n.tx;
        if (n.tx > maxX) maxX = n.tx;
        return n;
      }}
      onDataComputed={(data) => {
        const dx = maxX - minX;
        data.treeNodes.forEach((n) => {
          const color = interpolate((n.tx - minX) / (dx || 1));
          if (!colorLookupRef.current[n.id]) {
            colorLookupRef.current[n.id] = color;
          }
          n.color = colorLookupRef.current[n.id];
        });
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
          color: amber[500],
          highlightBorder: true,
        },
      ]}
    />
  );
};
