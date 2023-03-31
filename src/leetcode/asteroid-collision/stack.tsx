import React from 'react';
import {
  useVisualizerData,
  useTestCase,
  VArray,
  VStack,
  VC,
  VIcon,
  TVStackProps,
} from 'visualizer';
import { red, green, amber, lightGreen, blue } from 'colors';

export const Visualizer = () => {
  const { data, expression, type } = useVisualizerData();
  const testCase = useTestCase();
  const { asteroids = [], i, asteroidsLeft } = data;

  const test = type === 'testExpressionSuccess';
  const sorted = testCase.asteroids
    .slice()
    .map(Math.abs)
    .sort((a, b) => a - b);
  const average = Math.round((sorted.at(0) + sorted.at(-1)) / 2);
  const getElementLabel: TVStackProps<number>['getElementLabel'] = (
    e,
    i,
    [x, y]
  ) => {
    if (Math.abs(e) > average) {
      return e > 0 ? (
        <VIcon.ArrowRightDouble color={lightGreen[500]} x={x} y={y} />
      ) : (
        <VIcon.ArrowLeftDouble color={red[500]} x={x} y={y} />
      );
    }
    return e > 0 ? (
      <VIcon.ArrowRight color={lightGreen[500]} x={x} y={y} />
    ) : (
      <VIcon.ArrowLeft color={red[500]} x={x} y={y} />
    );
  };

  return (
    <>
      <VArray
        y={40}
        value={asteroids}
        pointers={[{ name: 'i', value: i, color: red[500] }]}
        getElementLabel={getElementLabel}
        getElementStyle={(e, i2, style) => {
          if (expression === 'a' && i === i2 && test) {
            style.background = lightGreen[500];
            style.color = '#ffffff';
          }
          if (
            expression === 'Math.abs(a) > Math.abs(asteroidsLeft.at(-1))' &&
            i === i2 &&
            test
          ) {
            style.background = amber[500];
            style.color = '#ffffff';
          }
          if (
            expression === 'Math.abs(a) < Math.abs(asteroidsLeft.at(-1))' &&
            i === i2
          ) {
            style.background = red[500];
            style.color = '#ffffff';
          }
          return style;
        }}
      />
      <VStack
        y={VC.Array.ItemSize + 40 + 60}
        value={asteroidsLeft}
        length={asteroids.length}
        getElementLabel={getElementLabel}
        getElementStyle={(e, i2, style) => {
          if (
            expression === 'Math.abs(a) > Math.abs(asteroidsLeft.at(-1))' &&
            asteroidsLeft.length - 1 === i2 &&
            test
          ) {
            style.background = red[500];
            style.color = '#ffffff';
          }
          if (
            expression === 'Math.abs(a) < Math.abs(asteroidsLeft.at(-1))' &&
            asteroidsLeft.length - 1 === i2
          ) {
            style.background = test ? lightGreen[500] : red[500];
            style.color = '#ffffff';
          }
          return style;
        }}
      />
    </>
  );
};
