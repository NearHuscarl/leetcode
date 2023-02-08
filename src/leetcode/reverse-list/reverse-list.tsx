import React from "react";
import { useVisualizerData, VLinkedList } from "visualizer";
import { red, purple, amber, lightGreen, teal, alpha, blue } from "colors";

export const Visualizer = () => {
  const { data, expression, type, listNodes } = useVisualizerData();
  const { head, left, cur, right } = data;

  return (
    <VLinkedList
      nodes={listNodes}
      pointers={[
        { name: "head", value: head, color: teal["500"], isHead: true },
        { name: "left", value: left, color: red["500"] },
        { name: "cur", value: cur, color: amber[600], highlight: true },
        { name: "right", value: right, color: purple[600] },
      ]}
    />
  );
};
