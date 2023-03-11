import React from 'react';
import { useVisualizerData, VArray, VSet, VC } from 'visualizer';
import { red, green, amber, blue, purple, lightGreen } from 'colors';

const colorLookup = {
  A: [red[500], red[100]],
  T: [purple[500], purple[100]],
  C: [lightGreen[500], lightGreen[100]],
  G: [blue[500], blue[100]],
};

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { cachedSeqs, duplicatedSeqs, s, i, subStr } = data;
  const checkExpr = expression === 'cachedSeqs.has(subStr)';
  const test = type === 'testExpressionSuccess';

  return (
    <>
      <VArray
        value={s}
        color="#00000000"
        highlightRange={[
          i,
          i + 9,
          checkExpr ? (test ? lightGreen[500] : red[500]) : amber[700],
        ]}
        getElementStyle={(e, i, style) => {
          style.borderColor = colorLookup[e][1];
          style.background = colorLookup[e][1];
          style.color = colorLookup[e][0];
          return style;
        }}
      />
      <VSet
        x={0}
        y={VC.Array.ItemSize + 70}
        label="cachedSeqs"
        width={130}
        value={cachedSeqs}
        highlights={{
          [subStr]: checkExpr && (test ? lightGreen[500] : red[500]),
        }}
      />
      <VSet
        x={VC.Array.ItemSize * 10 + 30}
        y={VC.Array.ItemSize + 70}
        label="duplicatedSeqs"
        width={130}
        value={duplicatedSeqs}
      />
    </>
  );
};
