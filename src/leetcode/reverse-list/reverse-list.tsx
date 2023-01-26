import React from "react";
import { useVisualizerData, VLinkedList } from "visualizer";
import { red, purple, amber, lightGreen, teal, alpha, blue } from "colors";

export const Visualizer = () => {
  const { data, expression, type, nodes } = useVisualizerData();
  const { list, head, left, cur, right } = data;

  return (
    <VLinkedList
      nodes={nodes}
      pointers={[
        { name: "head", value: head, color: purple["500"], isHead: true },
        { name: "left", value: left, color: red["500"] },
        { name: "cur", value: cur, color: amber[600] },
        { name: "right", value: right, color: purple[600] },
      ]}
    />
  );
};
