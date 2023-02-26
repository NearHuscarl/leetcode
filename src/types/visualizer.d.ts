export type TVisualizerConstants = {
  Array: {
    ItemSize: number;
    BorderW: number;
  };
  LinkedList: {
    NodeSize: number;
    LinkDistance: number;
  };
};

/**
 * Visualizer Constants
 */
export const VC: TVisualizerConstants;

export type TVectorLike = {
  x: number;
  y: number;
};

export interface TVBase {
  x?: number;
  y?: number;
}

export type TStepType =
  | 'statement'
  | 'callExpression'
  | 'returnStatement'
  | 'returnStatementFake'
  | 'testExpressionSuccess'
  | 'testExpressionFailed';

export type TDebugValue = string | number;
export type TDebugValue2 = TDebugValue | TDebugValue[];

export interface TVCodeProps extends TVBase {
  width?: number | string;
  height?: number | string;
  children: any;
}

export function VCode(props: TVCodeProps): JSX.Element;

export type TArrayPointer = {
  name: string;
  value: number;
  prevNonEmptyValue?: number;
  color?: string;
};

export type TArrayLike = TDebugValue[] | string;
export type TArrayValue<T extends TArrayLike> = T extends Array<TDebugValue>
  ? T[number]
  : string;

export interface TVArrayProps<
  A extends TArrayLike,
  V extends TArrayValue<A> = TArrayValue<A>
> extends TVBase {
  value?: A;
  label?: TSvgArrayProps<V>['label'];
  highlightRange?: TSvgArrayProps<V>['highlightRange'];
  getElementStyle?: TSvgArrayProps<V>['getElementStyle'];
  pointers?: TArrayPointer[];
}

export function VArray<
  A extends TArrayLike,
  V extends TArrayValue<A> = TArrayValue<A>
>(props: TVArrayProps<A, V>): JSX.Element;

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

export type TNodeId = number | string;
export type TNodeType = 'node' | 'pointer';
export interface TListNodeD3<T extends TDebugValue = number, Type = TNodeType>
  extends SimulationNodeDatum {
  id: TNodeId;
  val: T;
  next: TNodeId | null;
  references: Type extends 'node' ? Set<TNodeId> : undefined;
  color?: string;
  type: Type;
  isHead: boolean;
  isTail?: (node: TListNodeD3<T, 'node'>) => boolean;
  nodeIndex: Type extends 'node' ? number : undefined;
  headIndex: number;
  colorNode: Type extends 'pointer' ? boolean : undefined;
  fallbackColor?: Type extends 'node' ? string : undefined;
  highlight: Type extends 'pointer' ? boolean : undefined;
  position?: TVLinkedListProps['pointers'][number]['position'];
}

type TLLGroupProps<T extends TDebugValue> = {
  head: string;
  tail?: string;
  pin?: boolean;
};
export interface TVLinkedListProps<T extends TDebugValue = number>
  extends TVBase {
  nodes: Record<TNodeId, TListNodeD3<T>>;
  group?: TLLGroupProps<T>[];
  getNode?: (
    node: TListNodeD3<T>,
    nodeLookup: Record<TNodeId, TListNodeD3<T>>
  ) => TListNodeD3<T>;
  pointers: {
    name: string;
    value: TListNodeD3<T>;
    color?: string;
    highlight?: boolean;
    position?: 'top' | 'bottom';
    isHead?: boolean;
    isTail?: (node: TListNodeD3<T, 'node'>) => boolean;
    colorNode?: boolean;
  }[];
}

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
  references: Set<TNodeId>;
  tx: Type extends 'node' ? number : undefined;
  ty: Type extends 'node' ? number : undefined;
  highlight: Type extends 'pointer' ? boolean : undefined;
  highlightBorder: Type extends 'pointer' ? boolean : undefined;
}

export interface TTreeNodeD32<T extends TDebugValue2, Type = TNodeType>
  extends Partial<TTreeNodeD3<T, Type>> {
  children: TTreeNodeD32<T, Type>[];
  parent?: TTreeNodeD32<T, Type>;
}

export interface TTreeLinkD3<T extends TDebugValue = number>
  extends SimulationNodeDatum {
  source: TTreeNodeD3<T>;
  target: TTreeNodeD3<T, 'node'>;
  id: string;
  dasharray?: string;
  width?: number;
  display?: boolean;
}

export type TTreeData<T extends TDebugValue = number> = {
  nodes: TTreeNodeD3<T, TNodeType>[];
  links: TTreeLinkD3<T>[];
  nodeLookup: Record<TNodeId, TTreeNodeD3<T>>;
  treeNodes: TTreeNodeD3<T, 'node'>[];
  treePointers: TTreeNodeD3<T, 'pointer'>[];
};

export interface VTreeProps<T extends TDebugValue = number> extends TVBase {
  nodes?: Record<TNodeId, TTreeNodeD3<T>>;
  hierarchyNode?: THierarchyNode<TTreeNodeD3<T>>;
  getNode?: (
    node: TTreeNodeD3<T>,
    nodeLookup: Record<TNodeId, TTreeNodeD3<T>>
  ) => TTreeNodeD3<T>;
  onDataComputed?: (data: TTreeData<T>) => void;
  pointers: {
    name: string;
    value: TTreeNodeD3<T>;
    color?: string;
    highlight?: boolean;
    highlightBorder?: boolean;
  }[];
}

export function VTree(props: VTreeProps): JSX.Element;

export interface THierarchyNode<Datum> {
  children?: this[];
  data: Datum;
}

export interface VRecursiveTreeProps<T extends TDebugValue = number>
  extends TVBase {
  trackedFn: string;
  pointers?: VTreeProps<T>['pointers'];
  onVisitNode?: (
    node: TTreeNodeD32<any, 'node'>,
    data: {
      data: TIdentifier;
      onStack?: boolean;
      completed?: boolean;
      tip?: boolean;
    }
  ) => void;
}

export function VRecursiveTree(props: VRecursiveTreeProps): JSX.Element;

export type TSvgTextProps = {
  children: TDebugValue;
  color?: string;
  style?: React.CSSProperties;
  x?: number;
  y?: number;
  dx?: number;
  dy?: number;
};

export function SvgText(props: TSvgTextProps): JSX.Element;

type ArrayElementStyles = {
  color?: string;
  background?: string;
  borderColor?: string;
  fontWeight?: string | number;
};

type TSvgArrayProps<T extends TDebugValue> = {
  rootRef?: (r: SVGGElement | null) => void;
  value: any[];
  size?: number;
  color?: string;
  borderWidth?: number;
  label?: string;
  center?: boolean;
  getElementStyle?: (
    value: T,
    index: number,
    styles: ArrayElementStyles
  ) => ArrayElementStyles | undefined;
  highlightRange?: [start: number, end: number, color: string];
};

export function SvgArray<T extends TDebugValue>(
  props: TSvgArrayProps<T>
): JSX.Element;

type HighlightedKey = string;
type HighlightedColor = string;
export type TLookupTableHighlight = Record<HighlightedKey, HighlightedColor>;

interface TVLookupTableProps<K extends string, V> extends TVBase {
  value: Record<K, V>;
  highlights?: TLookupTableHighlight;
  getEntryStyle?: (
    entry: [K, V],
    style: React.CSSProperties
  ) => React.CSSProperties;
}
export function VLookupTable<K extends string, V>(
  props: TVLookupTableProps<K, V>
): JSX.Element;

interface TVStackProps<T extends TDebugValue> extends TVBase {
  value: T[];
  length: number;
  getElementStyle?: TSvgArrayProps<T>['getElementStyle'];
}
export function VStack<T extends TDebugValue>(
  props: TVStackProps<T>
): JSX.Element;

export function useVisualizerData(): {
  index: number;
  data: any;
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
  expression?: string | undefined;
  params?: any[];
  fn: {
    key: string;
    name: string;
  };
  listNodes: Record<number, TListNodeD3<any>>;
  treeNodes: Record<number, TTreeNodeD3<any>>;
};

export function Visualize(props: TVArrayProps): number;
