import React from "react";
import { useVisualizerData, VArray, VRecursiveTree } from "visualizer";
import { red, lightGreen, teal, amber, blue } from "colors";

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { nums = [], pivot, start, end, left, i } = data;

  return (
    <>
      <VArray
        value={nums}
        pointers={[
          { name: "left", value: left, color: red[500] },
          { name: "i", value: i, color: blue[500] },
        ]}
        highlightRange={[start, end, teal[300]]}
        getElementStyles={(value, index, style) => {
          if (value === pivot) {
            style.background = lightGreen[200];
            style.fontWeight = "500";
          }

          const test = type === "testExpressionSuccess";
          if (
            expression === "nums[i] < pivot" &&
            (index === i || value === pivot)
          ) {
            style.background = test ? lightGreen[500] : red[500];
            style.color = test ? "#ffffff" : "#000000";
          }
          return style;
        }}
      />
      <VRecursiveTree
        trackedFn="quickSort"
        onVisitNode={(node, nodeData) => {
          const data = nodeData.data;
          if (node.children.length === 2) {
            node.children.splice(1, 0, {
              id: `pivot-${node.children[0].id}-${node.children[1].id}`,
              val: [data.nums?.[data.end]],
              children: [],
              arrow: false,
              borderColor: red[300],
              label: "pivot",
            });
          }
          if (!node.id.toString().startsWith("pivot")) {
            node.val = (data.nums ?? []).slice(data.start, data.end + 1);
            if (!nodeData.tip && nodeData.onStack) {
              node.borderColor = amber[400];
            }
            const pivot = node.parent?.children[1].val[0];
            if (node.parent?.children[0] === node && pivot !== undefined) {
              node.label = "< " + pivot;
            }
            if (node.parent?.children[2] === node && pivot !== undefined) {
              node.label = ">= " + pivot;
            }
          }
        }}
      />
    </>
  );
};
