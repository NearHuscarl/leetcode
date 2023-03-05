import React from 'react';
import { useVisualizerData, VArray, VC } from 'visualizer';
import { red, yellow, blue, amber, lightGreen, transform } from 'colors';

const interpolateColor = transform(
  ['a'.charCodeAt(0), 'l'.charCodeAt(0), 'z'.charCodeAt(0)],
  [red[500], amber[500], lightGreen[500]]
);

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { arr1, arr2, i } = data;
  const test = type === 'testExpressionSuccess';

  return (
    <>
      {[arr1, arr2].map((arr, index) => (
        <VArray
          key={index}
          y={VC.Array.ItemSize + index * 80}
          value={arr}
          pointers={[{ name: 'i', value: i, color: red[500] }]}
          getElementStyle={(value, i2, style) => {
            style.background = interpolateColor(value.charCodeAt(0));
            style.color = '#ffffff';

            if (i === i2 && expression === 'arr1[i] !== arr2[i]') {
              style.background = !test ? lightGreen[500] : red[500];
              style.color = '#ffffff';
            }
            return style;
          }}
        />
      ))}
    </>
  );
};
