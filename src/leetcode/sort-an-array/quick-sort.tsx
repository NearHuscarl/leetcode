import React from "react";
import { useVisualizerData, VArray } from "visualizer";
import { red, lightGreen, teal, alpha, blue } from "colors";

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { nums = [], pivot, start, end, left, i } = data;

  return (
    <VArray
      array={nums}
      highlightRange={[start, end, teal[300]]}
      getElementStyles={(value, index, style) => {
        if (value === pivot) {
          style.background = lightGreen[200];
          style.fontWeight = "bold";
        }

        const test = type === "testExpressionSuccess";
        if (
          expression === "nums[i] < pivot" &&
          (index === i || value === pivot)
        ) {
          style.background = test ? lightGreen[500] : red[500];
          style.color = test ? "white" : "black";
        }
        return style;
      }}
      pointers={[
        { name: "left", value: left, color: red[500] },
        { name: "i", value: i, color: blue[500] },
      ]}
    />
  );
};
