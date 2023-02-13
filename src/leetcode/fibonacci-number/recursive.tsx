import React from "react";
import { useVisualizerData, VRecursiveTree } from "visualizer";
import { red, lightGreen, teal, alpha, blue } from "colors";

export const Visualizer = () => {
  return <VRecursiveTree trackedFn="fib" />;
};
