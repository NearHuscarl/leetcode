import React from "react";
import { useVisualizerData, VTree } from "visualizer";
import {
  red,
  purple,
  amber,
  lightGreen,
  lightBlue,
  teal,
  alpha,
  blue,
} from "colors";

export const Visualizer = () => {
  const { data, expression, type, treeNodes } = useVisualizerData();
  const { root } = data;

  return (
    <VTree
      nodes={treeNodes}
      pointers={[
        {
          name: "root",
          value: root,
          color: teal["500"],
        },
        {
          name: "left",
          value: root.left,
          color: amber[500],
        },
        {
          name: "right",
          value: root.right,
          color: lightBlue[500],
        },
      ]}
    />
  );
};
