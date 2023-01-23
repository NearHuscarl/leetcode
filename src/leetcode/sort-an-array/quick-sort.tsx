import React from "react";
import { useVisualizerData, VArray, VTree, useRecursiveTree } from "visualizer";
import { red, lightGreen, teal, amber, blue } from "colors";

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const { nums = [], pivot, start, end, left, i } = data;
  const treeData = useRecursiveTree({
    trackedFn: "quickSort",
    onVisitNode: (node) => {
      if (node.children?.length === 2) {
        const data = node.children[0].attributes.data;
        node.children.splice(1, 0, {
          name: "pivot",
          attributes: { pivot: data.nums?.[data.end + 1] } as any,
        });
      }
    },
  });

  return (
    <>
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
      <VTree
        data={treeData}
        arrowOffset={45}
        getNodeLabel={(node) => {
          if (node.name === "pivot") return node.name;
          const pivot = (node.parent?.children[1].attributes as any).pivot;
          if (node.parent?.children[0] === node && pivot) {
            return "< " + pivot;
          }
          if (node.parent?.children[2] === node && pivot) {
            return ">= " + pivot;
          }
        }}
        getNodeContent={(node) => {
          if (node.name === "pivot") {
            return [(node.attributes as any).pivot];
          }
          const { data } = node.attributes;
          return (data.nums ?? []).slice(data.start, data.end + 1);
        }}
        getNodeStyles={(node) => {
          if (node.name === "pivot") {
            return {
              arrayStyle: { stroke: red[300] },
            };
          }
        }}
      />
    </>
  );
};
