import React from 'react';
import { useVisualizerData, VLinkedList, VArray } from 'visualizer';
import { red, amber, blue, purple, lightGreen, green } from 'colors';

export const Visualizer = () => {
  const { data, type, expression, listNodes } = useVisualizerData();
  const { reversedHead, head, cur1, cur2, slowPointer, fastPointer } = data;

  return (
    <VLinkedList
      nodes={listNodes}
      getNode={(node, nodeLookup) => {
        const test = type === 'testExpressionSuccess';
        if (expression === 'cur1.val !== cur2.val') {
          const isHighlightedNodes =
            node.references.has('cur1') || node.references.has('cur2');
          if (isHighlightedNodes) {
            node.color = test ? red[500] : green[500];
          }
        }
        if (expression === 'fastPointer?.next') {
          if (node.references.has('slow') && test) {
            const nextNode = nodeLookup[node.next];
            if (nextNode) {
              nextNode.color = amber[500];
            }
          }
          if (node.references.has('fast') && test) {
            const nextNextNode = nodeLookup[nodeLookup[node.next]?.next];
            if (nextNextNode) {
              nextNextNode.color = lightGreen[500];
            }
          }
        }
        return node;
      }}
      pointers={[
        { name: 'head', value: head, color: blue[500] },
        { name: 'slow', value: slowPointer, color: amber[500] },
        { name: 'fast', value: fastPointer, color: lightGreen[500] },
        { name: 'cur1', value: cur1, color: red[300] },
        { name: 'cur2', value: cur2, color: red[800] },
      ]}
    />
  );
};
