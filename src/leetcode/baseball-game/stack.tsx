import React from "react";
import { useVisualizerData, VArray, VStack } from "visualizer";
import { red, green, amber, lightGreen, blue } from "colors";

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { operations = [], i, stack = [] } = data;

  return (
    <>
      <VArray
        value={operations}
        pointers={[{ name: "i", value: i, color: amber[700] }]}
      />
      <VStack
        position={{ x: 0, y: 80 }}
        value={stack}
        length={operations.length}
        getElementStyle={(value, i, style) => {
          const test = type === "testExpressionSuccess";
          if (expression === "op === '+'" && test) {
            if (i === stack.length - 2 || i === stack.length - 1) {
              style.background =
                i % 2 === 0 ? lightGreen[300] : lightGreen[500];
              style.color = "#ffffff";
            }
          } else if (expression === "op === 'D'" && test) {
            if (i === stack.length - 1) {
              style.background = blue[300];
              style.color = "#ffffff";
            }
          } else if (expression === "op === 'C'" && test) {
            if (i === stack.length - 1) {
              style.background = red[500];
              style.color = "#ffffff";
            }
          }
          return style;
        }}
      />
    </>
  );
};
