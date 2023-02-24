import React from 'react';
import { useVisualizerData, VLinkedList, VArray } from 'visualizer';
import { red, amber, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, type, expression, listNodes } = useVisualizerData();
  const { array = [], left, right, head, cur } = data;

  return (
    <>
      <VLinkedList
        nodes={listNodes}
        pointers={[
          { name: 'head', value: head, color: red[500] },
          { name: 'cur', value: cur, color: lightGreen[500], highlight: true },
        ]}
      />
      <VArray
        x={90}
        y={180}
        value={array}
        pointers={[
          { name: 'left', value: left, color: red[500] },
          { name: 'right', value: right, color: amber[500] },
        ]}
        getElementStyle={(_, index, style) => {
          const test = type === 'testExpressionSuccess';

          if (
            expression === 'array[left] !== array[right]' &&
            (index === left || index === right)
          ) {
            style.background = !test ? lightGreen[500] : red[500];
            style.color = '#ffffff';
          }

          return style;
        }}
      />
    </>
  );
};
