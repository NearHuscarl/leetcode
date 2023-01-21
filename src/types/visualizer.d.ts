export type TDebugValue = string | number;

export type TArrayPointer = {
  name: string;
  value: number;
  prevNonEmptyValue?: number;
  color?: string;
};
export type TVArrayProps = {
  array: TDebugValue[];
  highlightRange?: [start: number, end: number, color: string];
  getElementStyles?: (
    value: TDebugValue,
    index: number,
    styles: React.CSSProperties
  ) => React.CSSProperties | undefined;
  pointers?: TArrayPointer[];
};

export function VArray(props: TVArrayProps): JSX.Element;

export interface RawNodeDatum {
  name: string;
  attributes?: Record<string, string | number | boolean>;
  children?: RawNodeDatum[];
  parent?: RawNodeDatum;
}

export type TVTreeProps = {
  showFullTree?: boolean;
  width?: number | string;
  height?: number | string;
  data: RawNodeDatum;
};

export function VTree(props: TVTreeProps): JSX.Element;

export type TStepType =
  | "statement"
  | "callExpression"
  | "returnStatement"
  | "returnStatementFake"
  | "testExpressionSuccess"
  | "testExpressionFailed";

export function useVisualizerData(): {
  data: TIdentifier;
  type: TStepType;
  loc: {
    lineStart: number;
    lineEnd: number;
    columnStart: number;
    columnEnd: number;
    className?: string | undefined;
  };
  callStack: {
    name: string;
  }[];
  expression?: TExpression | undefined;
  params?: any[];
  fn: {
    key: string;
    name: string;
  };
};

export function useRecursiveTree(
  fnName: string,
  paramIndex: number
): RawNodeDatum;

export function Visualize(props: TVArrayProps): number;
