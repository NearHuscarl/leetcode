import React from "react";
import { useVisualizerData, useRecursiveTree, VTree } from "visualizer";
import { red, amber, teal, alpha, blue } from "colors";

export const Visualizer = () => {
  const { expression, type, data } = useVisualizerData();
  const treeData = useRecursiveTree({ trackedFn: "memoization" });

  return (
    <VTree
      data={treeData}
      getNodeStyles={(node) => {
        const { attributes } = node;
        const test = type === "testExpressionSuccess";
        const hitCache = expression === "cache[n] !== undefined" && test;
        const hitCircleStyle = {
          fill: amber[500],
          stroke: amber[500],
        };
        const hitTextStyle = {
          stroke: "white",
        };
        const isHighlightedNode =
          attributes?.tip || attributes.params[0] === data.n;

        return {
          circleStyle: hitCache && isHighlightedNode ? hitCircleStyle : {},
          textStyle: hitCache && isHighlightedNode ? hitTextStyle : {},
        };
      }}
      getTooltipContent={(node) => {
        if (!node.attributes?.data?.cache) {
          return null;
        }
        return (
          <pre>{JSON.stringify(node.attributes?.data?.cache, null, 2)}</pre>
        );
      }}
    />
  );
};
