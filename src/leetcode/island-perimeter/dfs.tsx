import React from 'react';
import { useVisualizerData, VMatrix, VField, VSet, VC } from 'visualizer';
import {
  red,
  yellow,
  amber,
  purple,
  lightGreen,
  brown,
  lightBlue,
  transform,
} from 'colors';

const interpolateColor = transform([1, 8], [purple[100], purple[900]]);

export const Visualizer = () => {
  const { data, expression, type, callStack } = useVisualizerData();
  const { grid, i, j, perim, visit } = data;
  const visitSet = new Set(visit);

  return (
    <>
      <VField
        x={28}
        y={70}
        label="Perimeter"
        value={perim}
        color={yellow[700]}
      />
      <VMatrix
        y={80}
        value={grid}
        highlight={[1, yellow[500]]}
        getElementStyle={(v, r, c, style) => {
          style.background = v == 1 ? brown[200] : lightBlue[200];

          if (visitSet.has(`${r},${c}`)) {
            style.background = lightGreen[500];
          }
          if (r === i && c === j) {
            style.background = amber[500];
          }

          callStack.forEach(({ params }, i) => {
            const [cr, cc] = params;
            if (cr == r && cc == c) {
              style.background = interpolateColor(i);
              if (i === callStack.length - 1) {
                style.borderColor = purple[500];
              }
            }
          });

          return style;
        }}
      />
      <VSet
        x={VC.Array.ItemSize * (grid?.[0]?.length ?? 0) + 50}
        y={80}
        label="Cached Indices"
        value={visit}
      />
    </>
  );
};
