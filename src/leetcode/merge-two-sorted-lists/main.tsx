import React from "react";
import { useVisualizerData, VLinkedList } from "visualizer";
import { red, purple, amber, lightGreen, teal, alpha, blue } from "colors";

export const Visualizer = () => {
  const { data, expression, type, nodes } = useVisualizerData();
  const { prefixNode, cur, cur1, cur2 } = data;

  return (
    <VLinkedList
      nodes={nodes}
      pointers={[
        { name: "head", value: prefixNode, color: teal["500"], isHead: true },
        { name: "cur", value: cur, color: amber[500] },
        { name: "cur1", value: cur1, color: red[500] },
        { name: "cur2", value: cur2, color: purple[500] },
      ]}
    />
  );
};
