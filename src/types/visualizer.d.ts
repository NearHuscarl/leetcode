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

type TNodeId = number | string;
interface TListNodeD3<T extends TDebugValue = number> {
  id: TNodeId;
  val: T;
  next: TNodeId | null;
}
export type TVLinkedListProps<T extends TDebugValue = number> = {
  nodes: Record<TNodeId, TListNodeD3<T>>;
  pointers: {
    name: string;
    value: TListNodeD3<T>;
    color?: string;
    highlight?: boolean;
    position?: "top" | "bottom";
    isHead?: boolean;
  }[];
};

export function VLinkedList(props: TVLinkedListProps): JSX.Element;

export interface RawNodeDatum {
  name: string;
  attributes: {
    index: number;
    params: any[];
    data: TIdentifier;
    completed?: boolean;
    onStack?: boolean;
    tip?: boolean;
    custom?: Record<string, any>;
  };
  children?: RawNodeDatum[];
  parent?: RawNodeDatum;
}

type TRenderCustomNodeElementProps = {
  showFullTree?: boolean;
  node: RawNodeDatum;
  getNodeContent: TVTreeProps["getNodeContent"];
  getNodeLabel: TVTreeProps["getNodeLabel"];
  getTooltipContent: TVTreeProps["getTooltipContent"];
  getNodeStyles: TVTreeProps["getNodeStyles"];
};
export type TRenderNodeFn = (
  props: TRenderCustomNodeElementProps
) => JSX.Element;

export type TVTreeProps = {
  showFullTree?: boolean;
  width?: number | string;
  height?: number | string;
  data: RawNodeDatum;
  arrowOffset?: number;
  renderNode?: TRenderNodeFn;
  getNodeContent?: (node: RawNodeDatum) => TDebugValue | TDebugValue[];
  getNodeLabel?: (node: RawNodeDatum) => string;
  getTooltipContent?: (node: RawNodeDatum) => React.ReactNode;
  getNodeStyles?: (node: RawNodeDatum) => {
    circleStyle?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    arrayStyle?: React.CSSProperties;
  };
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
  index: number;
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
  nodes: Record<number, TListNodeD3<any>>;
};

type TUseRecursiveTreeProps = {
  trackedFn: string;
  onVisitNode?: (node: RawNodeDatum) => void;
};

export function useRecursiveTree(props: TUseRecursiveTreeProps): RawNodeDatum;

export function Visualize(props: TVArrayProps): number;
