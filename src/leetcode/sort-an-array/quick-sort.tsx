import React from 'react';
import { useVisualizerData, VArray, VRecursiveTree } from 'visualizer';
import { red, lightGreen, teal, amber, blue, grey } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { nums = [], pivot, start, end, left, i } = data;
  const test = type === 'testExpressionSuccess';

  return (
    <>
      <VArray
        value={nums}
        pointers={[
          { name: 'left', value: left, color: red[500] },
          { name: 'i', value: i, color: blue[500] },
        ]}
        color={teal[50]}
        highlightRange={[start, end, teal[300]]}
        getElementStyle={(value, index, style) => {
          style.color = '#ffffff';
          if (value === pivot) {
            style.background = amber[500];
          }

          const computed = left === start + Math.floor((end - start) / 2);
          const inRange = start <= index && index <= end;
          const visited = computed ? true : index <= i;
          if (value < pivot) {
            style.background =
              inRange && visited ? lightGreen[500] : lightGreen[200];
            style.borderColor =
              inRange && visited ? lightGreen[500] : lightGreen[200];
          }
          if (value > pivot) {
            style.background = inRange && visited ? red[500] : red[200];
            style.borderColor = inRange && visited ? red[500] : red[200];
          }

          if (
            expression === 'nums[i] < pivot' &&
            (index === i || value === pivot)
          ) {
            style.background = test ? lightGreen[800] : red[800];
          }
          return style;
        }}
      />
      <VRecursiveTree<number[]>
        trackedFn="quickSort"
        separationFactor={4.2}
        renderNode={(n) => {
          const { start, end, nums = [] } = n.recursiveData?.data ?? {};
          const pivot = nums[end];

          return (
            <VArray
              value={n.val}
              color={teal[50]}
              label={n.label}
              center
              highlightRange={[start, end, teal[300]]}
              getElementStyle={(e, i, style) => {
                if (pivot === e) {
                  style.background = amber[500];
                  style.color = '#ffffff';
                }
                if (start > i || i > end) {
                  style.color = grey[300];
                }
                return style;
              }}
            />
          );
        }}
      />
    </>
  );
};
