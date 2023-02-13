import React from "react";
import { useVisualizerData, VRecursiveTree } from "visualizer";
import { amber } from "colors";

export const Visualizer = () => {
  const { expression, type, data } = useVisualizerData();

  return (
    <VRecursiveTree
      trackedFn="memoization"
      onVisitNode={(node, nodeData) => {
        const test = type === "testExpressionSuccess";
        const hitCache = expression === "cache[n] !== undefined" && test;
        const isHighlightedNode = nodeData.tip || nodeData.data.n === data.n;

        if (hitCache && isHighlightedNode) {
          node.color = amber[500];
          node.borderColor = amber[500];
        }
      }}
    />
  );
};
