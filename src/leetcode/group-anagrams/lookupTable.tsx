import React from 'react';
import { useVisualizerData, VArray, VLookupTable, VC } from 'visualizer';
import { red, yellow, amber, purple, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type, callStack } = useVisualizerData();
  const { group, strs, i } = data;

  return (
    <>
      <VArray
        value={strs}
        pointers={[{ name: 'i', value: i, color: red[500] }]}
      />
      <VLookupTable
        y={VC.Array.ItemSize + 50}
        value={group}
        header={['Freq', 'Anagrams']}
        keyWidth={350}
        valueWidth={300}
      />
    </>
  );
};
