import React from 'react';
import { useVisualizerData, VArray, VField, VC } from 'visualizer';
import { red, yellow, blue, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { nums = [], i, n, seqItem, max } = data;
  const sortedNums = nums.slice().sort((a, b) => a - b);
  const sortedNumsWithSpace = [];
  const test = type === 'testExpressionSuccess';

  for (let i = 0; i < sortedNums.length; i++) {
    sortedNumsWithSpace.push(sortedNums[i]);
    if (sortedNums[i] !== sortedNums[i + 1] - 1) {
      sortedNumsWithSpace.push('');
    }
  }
  if (sortedNumsWithSpace.length > 0) {
    sortedNumsWithSpace.unshift('');
  }

  return (
    <>
      <VArray
        x={VC.Array.ItemSize}
        y={VC.Array.ItemSize}
        label="array"
        value={nums}
        pointers={[{ name: 'i', value: i, color: red[500] }]}
      />
      <VArray
        label="set"
        y={VC.Array.ItemSize * 2 + 60}
        value={sortedNumsWithSpace}
        color={blue[100]}
        pointers={[
          {
            name: 'i',
            value: sortedNumsWithSpace.indexOf(seqItem),
            color: red[500],
          },
        ]}
        getElementStyle={(value, index, style) => {
          const isStartElements =
            sortedNumsWithSpace[index] === n ||
            sortedNumsWithSpace[index + 1] === n;

          if (isStartElements && expression === 'isStartOfSeq') {
            style.background = test ? lightGreen[500] : red[500];
            style.color = '#ffffff';
          }
          if (value !== '') {
            style.borderColor = blue[500];
          } else {
          }
          return style;
        }}
      />
      <VField
        x={VC.Array.ItemSize}
        y={VC.Array.ItemSize + 180}
        label="max"
        value={max}
      />
    </>
  );
};
