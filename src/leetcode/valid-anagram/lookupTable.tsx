import React from 'react';
import { useVisualizerData, VLookupTable, VArray, VC } from 'visualizer';
import { red, green, amber, teal, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { freq1, freq2, s = '', t = '', i, chr } = data;
  const arraySize = VC.Array.ItemSize * (s.length + 1);

  return (
    <>
      {[s, t].map((str, index) => (
        <VArray
          key={index}
          x={arraySize * index}
          y={30}
          label={index === 0 ? 's' : 't'}
          value={str}
          pointers={[{ name: 'i', value: i, color: red[500] }]}
        />
      ))}
      {[freq1, freq2].map((freq, index) => (
        <VLookupTable
          key={index}
          x={arraySize * index}
          y={110}
          value={freq}
          highlights={{ [chr]: amber[500] }}
          getEntryStyle={(entry, style) => {
            const test = type === 'testExpressionSuccess';
            if (
              expression === 'freq1[chr] !== freq2[chr]' &&
              entry[0] === chr
            ) {
              style.background = test ? red[500] : lightGreen[500];
              style.color = '#ffffff';
            }
            return style;
          }}
        />
      ))}
    </>
  );
};
