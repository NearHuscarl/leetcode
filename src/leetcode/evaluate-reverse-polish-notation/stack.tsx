import React from 'react';
import { useVisualizerData, VC, VArray, VStack } from 'visualizer';
import { red, amber, lightGreen, blue } from 'colors';

export const Visualizer = () => {
  const { data, type, expression } = useVisualizerData();
  const { stack, tokens = [], i } = data;
  const operators = new Set(['+', '-', '*', '/']);
  const test = type === 'testExpressionSuccess';

  return (
    <>
      <VArray
        value={tokens}
        pointers={[{ name: 'i', value: i, color: red[500] }]}
        getElementStyle={(e, i, style) => {
          if (operators.has(e + '')) {
            style.background = amber[100];
          }

          return style;
        }}
      />
      <VStack
        y={VC.Array.ItemSize + 40}
        value={stack}
        length={tokens.filter((t) => !operators.has(t + '')).length}
        getElementStyle={(value, i, style) => {
          if (
            (expression === "token === '+'" ||
              expression === "token === '-'" ||
              expression === "token === '*'" ||
              expression === "token === '/'") &&
            test
          ) {
            if (i === stack.length - 1 || i === stack.length - 2) {
              style.background =
                i % 2 === 0 ? lightGreen[300] : lightGreen[500];
              style.color = '#ffffff';
            }
          }

          return style;
        }}
      />
    </>
  );
};
