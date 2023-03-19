import React from 'react';
import {
  useVisualizerData,
  useTestCase,
  VStack,
  VRecursiveTree,
  VString,
  VSet,
  VC,
} from 'visualizer';
import { red, yellow, blue, amber, purple, lightGreen } from 'colors';

export const Visualizer = () => {
  const { data, expression, type, callStack } = useVisualizerData();
  const { n } = useTestCase();
  const { stack, res } = data;
  const colorTransformer = {
    '(': blue[500],
    ')': yellow[600],
  };

  return (
    <>
      <VStack value={stack} length={2 * n} />
      <VRecursiveTree
        trackedFn="backtrack"
        getNodeValue={(step) => step.watch.local.stack.join('')}
        separationFactor={1.5}
        renderNode={(n) => {
          return (
            <VString
              value={n.val}
              center
              colorTransformer={colorTransformer}
              getElementStyle={(value, i, style) => {
                style.fontWeight = 600;
                style.background = '#ffffff';
                return style;
              }}
            />
          );
        }}
      />
      <VSet
        y={VC.Array.ItemSize + 50}
        renderItem={(value, [x, y]) => (
          <VString
            x={x}
            y={y}
            color={VC.Set.Color}
            value={value}
            colorTransformer={colorTransformer}
          />
        )}
        label="res"
        value={res}
      />
    </>
  );
};
