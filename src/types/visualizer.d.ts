export type TStepType =
  | "statement"
  | "callExpression"
  | "returnStatement"
  | "returnStatementFake"
  | "testExpressionSuccess"
  | "testExpressionFailed";

export type TDebugValue = string | number;
export type TDebugValue2 = TDebugValue | TDebugValue[];

export function VCode(props: React.PropsWithChildren): JSX.Element;

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
interface TListNodeD3<T extends TDebugValue = number, Type = TNodeType> {
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

export interface TTreeNodeD3<T extends TDebugValue2 = number, Type = TNodeType>
  extends SimulationNodeDatum {
  id: TNodeId;
  val: T;
  // for array node
  label?: string;
  childIndex?: number;
  children: TNodeId[];
  parent?: TNodeId | null;
  tooltip?: string;
  color?: string;
  borderColor?: string;
  arrow?:
    | {
        color?: string;
        dasharray?: number;
        width?: number;
      }
    | false;
  type: Type;
  tx: Type extends "node" ? number : undefined;
  ty: Type extends "node" ? number : undefined;
  highlight: Type extends "pointer" ? boolean : undefined;
  highlightBorder: Type extends "pointer" ? boolean : undefined;
}

export interface TTreeNodeD32<T extends TDebugValue2, Type = TNodeType>
  extends Partial<TTreeNodeD3<T, Type>> {
  children: TTreeNodeD32<T, Type>[];
  parent?: TTreeNodeD32<T, Type>;
}

export interface TTreeLinkD3<T extends TDebugValue = number>
  extends SimulationNodeDatum<TTreeNodeD3<T>> {
  source: TTreeNodeD3<T>;
  target: TTreeNodeD3<T, "node">;
  id: string;
  dasharray?: string;
  width?: number;
  display?: boolean;
}

export type TTreeData<T extends TDebugValue = number> = {
  nodes: TTreeNodeD3<T, TNodeType>[];
  links: TTreeLinkD3<T>[];
  nodeLookup: Record<TNodeId, TTreeNodeD3<T>>;
  treeNodes: TTreeNodeD3<T, "node">[];
  treePointers: TTreeNodeD3<T, "pointer">[];
};

export type VTreeProps<T extends TDebugValue = number> = {
  nodes?: Record<TNodeId, TTreeNodeD3<T>>;
  hierarchyNode?: THierarchyNode<TTreeNodeD3<T>>;
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

export interface THierarchyNode<Datum> {
  children?: this[];
  data: Datum;
}

export type VRecursiveTreeProps<T extends TDebugValue = number> = {
  trackedFn: string;
  pointers?: VTreeProps<T>["pointers"];
  onVisitNode?: (
    node: TTreeNodeD32<any, "node">,
    data: {
      data: TIdentifer;
      onStack?: boolean;
      completed?: boolean;
      tip?: boolean;
    }
  ) => void;
};

export function VRecursiveTree(props: VRecursiveTreeProps): JSX.Element;

export function SvgText(props: TSvgTextProps): JSX.Element;

type TSvgArrayProps = {
  rootRef?: (r: SVGGElement) => void;
  array: any[];
  size?: number;
  color?: string;
  borderWidth?: number;
  label?: string;
};

export function SvgArray(props: TSvgArrayProps): JSX.Element;

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

export function Visualize(props: TVArrayProps): number;
