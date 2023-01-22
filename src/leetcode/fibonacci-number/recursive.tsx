import React from "react";
import { useVisualizerData, useRecursiveTree, VTree } from "visualizer";
import { red, lightGreen, teal, alpha, blue } from "colors";

export const Visualizer = () => {
  const treeData = useRecursiveTree({ trackedFn: "fib", param: 0 });

  return <VTree width="100%" height="100%" data={treeData} />;
};
