import React, { CSSProperties } from "react";
import { useVisualizerData, VArray } from "visualizer";
import { red, purple, lightGreen, amber } from "colors";

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { nums = [], left, right, mid, target } = data;

  return (
    <VArray
      position={{ x: 0, y: 50 }}
      value={nums}
      getElementStyles={(value, index, style) => {
        if (value === target) {
          style.borderColor = lightGreen[500];
        }

        const test = type === "testExpressionSuccess";

        if (index < left || index > right) {
          style.color = "#00000044";
        }
        if (expression === "nums[mid] === target" && index === mid) {
          style.background = test ? lightGreen[500] : red[500];
        }
        if (expression === "nums[mid] > target" && index < mid) {
          style.background = test ? lightGreen[100] : red[100];
        }
        if (expression === "nums[mid] < target" && index > mid) {
          style.background = test ? lightGreen[100] : red[100];
        }
        return style;
      }}
      pointers={[
        { name: "left", value: left, color: purple["500"] },
        { name: "right", value: right, color: red["500"] },
        { name: "mid", value: mid, color: amber[600] },
      ]}
    />
  );
};
