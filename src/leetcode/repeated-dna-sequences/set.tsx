import React from 'react';
import { useVisualizerData, VString, VSet, VC } from 'visualizer';
import { red, green, amber, blue, purple, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { cachedSeqs, duplicatedSeqs, s, i = 0, subStr } = data;
  const checkExpr = expression === 'cachedSeqs.has(subStr)';
  const test = type === 'testExpressionSuccess';
  const colorTransformer = {
    A: red[500],
    T: purple[500],
    C: lightGreen[500],
    G: blue[500],
  };

  return (
    <>
      <VString
        value={s}
        colorTransformer={colorTransformer}
        highlightRange={[
          i,
          i + 9,
          checkExpr ? (test ? lightGreen[500] : red[500]) : amber[700],
        ]}
      />
      <VSet
        x={0}
        y={VC.Array.ItemSize + 70}
        label="cachedSeqs"
        width={132}
        value={cachedSeqs}
        renderItem={(value, [x, y]) => (
          <VString
            x={x}
            y={y}
            value={value}
            colorTransformer={colorTransformer}
            color={purple[500]}
          />
        )}
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
        renderItem={(value, [x, y]) => (
          <VString
            x={x}
            y={y}
            value={value}
            colorTransformer={colorTransformer}
            color={purple[500]}
          />
        )}
      />
    </>
  );
};
