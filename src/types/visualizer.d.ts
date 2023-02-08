export type TDebugValue = string | number;

interface SimulationNodeDatum {
  /**
   * Node’s zero-based index into nodes array. This property is set during the initialization process of a simulation.
   */
  index?: number | undefined;
  /**
   * Node’s current x-position
   */
  x?: number | undefined;
  /**
   * Node’s current y-position
   */
  y?: number | undefined;
  /**
   * Node’s current x-velocity
   */
  vx?: number | undefined;
  /**
   * Node’s current y-velocity
   */
  vy?: number | undefined;
  /**
   * Node’s fixed x-position (if position was fixed)
   */
  fx?: number | null | undefined;
  /**
   * Node’s fixed y-position (if position was fixed)
   */
  fy?: number | null | undefined;
}

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
type TNodeType = "node" | "pointer";
interface TListNodeD3<T extends TDebugValue = number, Type = TNodeType>
  extends SimulationNodeDatum {
  id: TNodeId;
  val: T;
  next: TNodeId | null;
  references: Type extends "node" ? TNodeId[] : undefined;
  color?: string;
  type: Type;
  isHead: boolean;
  isTail?: (node: TListNodeD3<T, "node">) => boolean;
  nodeIndex: Type extends "node" ? number : undefined;
  headIndex: number;
  colorNode: Type extends "pointer" ? boolean : undefined;
  fallbackColor?: Type extends "node" ? string : undefined;
  highlight: Type extends "pointer" ? boolean : undefined;
  position?: TVLinkedListProps["pointers"][number]["position"];
}
export type TVLinkedListProps<T extends TDebugValue = number> = {
  nodes: Record<TNodeId, TListNodeD3<T>>;
  getNode?: (node: TListNodeD3<T>) => TListNodeD3<T>;
  pointers: {
    name: string;
    value: TListNodeD3<T>;
    color?: string;
    highlight?: boolean;
    position?: "top" | "bottom";
    isHead?: boolean;
    isTail?: (node: TListNodeD3<T, "node">) => boolean;
    colorNode?: boolean;
  }[];
};

export function VLinkedList(props: TVLinkedListProps): JSX.Element;

export interface TTreeNodeD3<T extends TDebugValue = number, Type = TNodeType>
  extends SimulationNodeDatum {
  id: TNodeId;
  val: T;
  childIndex?: number;
  left: TNodeId | null;
  right: TNodeId | null;
  parent: TNodeId | null;
  color?: string;
  borderColor?: string;
  type: Type;
  tx: Type extends "node" ? number : undefined;
  ty: Type extends "node" ? number : undefined;
  highlight: Type extends "pointer" ? boolean : undefined;
  highlightBorder: Type extends "pointer" ? boolean : undefined;
}

export type TTreeData<T extends TDebugValue = number> = {
  nodes: TTreeNodeD3<T, TNodeType>[];
  links: TTreeLinkD3<T>[];
  nodeLookup: Record<TNodeId, TTreeNodeD3<T>>;
  treeNodes: TTreeNodeD3<T, "node">[];
  treePointers: TTreeNodeD3<T, "pointer">[];
};

export type VTreeProps<T extends TDebugValue = number> = {
  nodes: Record<TNodeId, TTreeNodeD3<T>>;
  getNode?: (node: TTreeNodeD3<T>) => TTreeNodeD3<T>;
  onDataComputed?: (data: TTreeData<T>) => void;
  pointers: {
    name: string;
    value: TTreeNodeD3<T>;
    color?: string;
    highlight?: boolean;
    highlightBorder?: boolean;
  }[];
};

export function VTree2(props: VTreeProps): JSX.Element;

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
  listNodes: Record<number, TListNodeD3<any>>;
  treeNodes: Record<number, TTreeNodeD3<any>>;
};

type TUseRecursiveTreeProps = {
  trackedFn: string;
  onVisitNode?: (node: RawNodeDatum) => void;
};

export function useRecursiveTree(props: TUseRecursiveTreeProps): RawNodeDatum;

export function Visualize(props: TVArrayProps): number;
