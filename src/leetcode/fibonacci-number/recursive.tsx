import React from "react";
import { useVisualizerData, useRecursiveTree, VTree } from "visualizer";
import { red, lightGreen, teal, alpha, blue } from "colors";

export const Visualizer = () => {
  const treeData = useRecursiveTree({ trackedFn: "fib" });

  return <VTree data={treeData} />;
};
