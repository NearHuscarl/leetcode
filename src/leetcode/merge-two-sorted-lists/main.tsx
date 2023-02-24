import React from 'react';
import { useVisualizerData, VLinkedList } from 'visualizer';
import {
  red,
  purple,
  amber,
  lightGreen,
  lightBlue,
  teal,
  alpha,
  blue,
} from 'colors';

export const Visualizer = () => {
  const { data, expression, type, listNodes } = useVisualizerData();
  const { prefixNode, cur, list1, list2, cur1, cur2 } = data;

  return (
    <VLinkedList
      nodes={listNodes}
      getNode={(n) => {
        const test = type === 'testExpressionSuccess';
        if (expression === 'cur1.val < cur2.val') {
          if (n.references.has('cur1')) {
            n.color = test ? lightGreen[500] : red[500];
          }
          if (n.references.has('cur2')) {
            n.color = test ? red[500] : lightGreen[500];
          }
        }

        return n;
      }}
      group={[
        {
          head: 'list1',
        },
        {
          head: 'head',
          tail: 'cur',
          pin: true,
        },
        {
          head: 'list2',
        },
      ]}
      pointers={[
        { name: 'list1', value: list1, color: amber[500], colorNode: true },
        { name: 'head', value: prefixNode, color: teal['500'] },
        { name: 'list2', value: list2, color: lightBlue[500], colorNode: true },
        { name: 'cur', value: cur, color: red[500] },
        { name: 'cur1', value: cur1, color: amber[700] },
        { name: 'cur2', value: cur2, color: lightBlue[700] },
      ]}
    />
  );
};
