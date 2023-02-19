import React from "react";
import { useVisualizerData, VTree } from "visualizer";
import { red, green, amber, lightGreen, teal, transform } from "colors";

const interpolate = transform(
  [0, 0.5, 1],
  [red[500], amber[500], lightGreen[500]]
);

let colorLookup = {};
let nodes = 0;

export const Visualizer = () => {
  const { data, expression, type, treeNodes } = useVisualizerData();
  const { root, node } = data;
  let minX = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;

  const nodeCount = Object.keys(treeNodes).length;
  if (nodeCount !== nodes) {
    nodes = nodeCount;
    colorLookup = {};
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
          const color = interpolate((n.tx - minX) / dx);
          if (!colorLookup[n.id]) {
            colorLookup[n.id] = color;
          }
          n.color = colorLookup[n.id];
        });
      }}
      pointers={[
        {
          name: "root",
          value: root,
          color: teal["500"],
        },
        {
          name: "node",
          value: node,
          color: amber[500],
          highlightBorder: true,
        },
      ]}
    />
  );
};
