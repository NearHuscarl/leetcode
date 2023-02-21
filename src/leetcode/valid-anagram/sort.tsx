import React from 'react';
import { useVisualizerData, VArray, VC } from 'visualizer';
import { red, green, amber, blue, lightGreen, transform } from 'colors';

const interpolateColor = transform(
  ['a'.charCodeAt(0), 'l'.charCodeAt(0), 'z'.charCodeAt(0)],
  [red[500], amber[500], lightGreen[500]]
);

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { s = '', t = '' } = data;
  const arraySize = VC.Array.ItemSize * (s.length + 1);

  return (
    <>
      {[s, t].map((str, index) => (
        <VArray
          key={index}
          x={arraySize * index}
          y={30}
          label={index === 0 ? 's' : 't'}
          value={str.split('')}
          getElementStyle={(e, i, style) => {
            style.background = interpolateColor(e.charCodeAt(0));
            return style;
          }}
        />
      ))}
    </>
  );
};
