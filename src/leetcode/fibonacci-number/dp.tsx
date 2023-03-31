import React from 'react';
import { useVisualizerData, VRecursiveTree } from 'visualizer';
import { amber } from 'colors';

export const Visualizer = () => {
  const { expression, type, data } = useVisualizerData();

  return (
    <VRecursiveTree
      trackedFn="memoization"
      getNode={(node) => {
        const test = type === 'testExpressionSuccess';
        const hitCache = expression === 'cache[n] !== undefined' && test;
        const { recursiveData } = node;
        const isHighlightedNode =
          recursiveData.tip || recursiveData.data?.n === data.n;

        if (hitCache && isHighlightedNode) {
          node.style.bgColor = amber[500];
          node.style.borderColor = '#ffffff00';
        }
        return node;
      }}
    />
  );
};
