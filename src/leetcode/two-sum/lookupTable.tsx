import React from 'react';
import { useVisualizerData, VArray, VLookupTable, VC } from 'visualizer';
import { red, yellow, blue, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { nums, i, indexLookup = {}, target } = data;
  const label =
    target !== undefined && nums[i] !== undefined
      ? `${target} - ${nums[i]}`
      : '';
  const key = (target ?? 0) - (nums?.[i] ?? 0);
  const keyFound = indexLookup[key] !== undefined;
  const checkKeyExpr = expression === 'indexLookup[subtracted] !== undefined';

  return (
    <>
      <VArray
        y={30}
        label="nums"
        value={nums}
        pointers={[{ key: 'i', name: label, value: i, color: red[500] }]}
        getElementStyle={(e, i2, style) => {
          if (checkKeyExpr && i === i2 && keyFound) {
            style.background = lightGreen[500];
            style.color = '#ffffff';
          }

          return style;
        }}
      />
      <VLookupTable
        y={VC.Array.ItemSize + 100}
        value={indexLookup}
        header={['nums[i]', 'Index']}
        keyWidth={70}
        hideRatio
        label={
          checkKeyExpr
            ? keyFound
              ? `${key} found!`
              : `${key} not found`
            : undefined
        }
        getEntryStyle={(entry, style) => {
          if (checkKeyExpr) {
            if (keyFound && entry[0] == key) {
              style.key.background = lightGreen[500];
              style.key.color = '#ffffff';
            }
            if (!keyFound) {
              style.key.background = red[500];
              style.key.color = '#ffffff';
            }
          }

          return style;
        }}
      />
    </>
  );
};
