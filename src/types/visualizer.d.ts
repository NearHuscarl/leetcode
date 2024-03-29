export type TVisualizerConstants = {
  Array: {
    ItemSize: number;
    BorderW: number;
  };
  String: {
    ItemHeight: number;
    ItemWidth: number;
  };
  Set: {
    Color: string;
  };
  LinkedList: {
    NodeSize: number;
    LinkDistance: number;
  };
  LineChart: {
    Width: number;
    Height: number;
    Padding: number;
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
  rootRef?: (r: SVGGElement | null) => void;
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

export interface TVIconProps extends TVBase {
  color?: string;
}
export type TVIcon = (props: TVIconProps) => JSX.Element;

export const VIcon: {
  ArrowLeft: TVIcon;
  ArrowLeftDouble: TVIcon;
  ArrowRight: TVIcon;
  ArrowRightDouble: TVIcon;
};

export interface TVCodeProps extends TVBase {
  width?: number | string;
  height?: number | string;
  children: any;
}

export function VCode(props: TVCodeProps): JSX.Element;

export interface TVStringProps extends TVBase {
  value?: TDebugValue;
  label?: string;
  color?: string;
  center?: boolean;
  pointers?: TArrayPointer[];
  highlightRange?: TSvgArrayProps<TDebugValue>['highlightRange'];
  colorTransformer?: Record<string | '', string>;
  getElementStyle?: TSvgArrayProps<string>['getElementStyle'];
}

export function VString(props: TVStringProps): JSX.Element;

export type TArrayPointer = {
  key?: string;
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
  center?: boolean;
  color?: string;
  highlightRange?: TSvgArrayProps<V>['highlightRange'];
  getElementStyle?: TSvgArrayProps<V>['getElementStyle'];
  getElementLabel?: (
    value: V,
    index: number,
    position: [x: number, y: number]
  ) => JSX.Element;
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

export interface TTreeNode<T> {
  id: number;
  val: T;
  children: TTreeNode<T>[];
}

export interface TTreeNodeD3<T extends TDebugValue2 = number, Type = TNodeType>
  extends SimulationNodeDatum,
    Omit<TTreeNode<T>, 'id' | 'children'> {
  id: TNodeId;
  children: TTreeNodeD3<T, 'node'>[];
  data: any;
  // for array node
  label?: string;
  style: {
    bgColor?: string;
    color?: string;
    fontWeight?: number;
    borderColor?: string;
  };
  arrow?:
    | {
        color?: string;
        dasharray?: number;
        width?: number;
      }
    | false;
  parent?: TTreeNodeD3 | null;
  tooltip?: string;
  type: Type;
  references: Set<TNodeId>;
  tx: Type extends 'node' ? number : undefined;
  ty: Type extends 'node' ? number : undefined;
  highlight: Type extends 'pointer' ? boolean : undefined;
  highlightBorder: Type extends 'pointer' ? boolean : undefined;
}

export interface TTreeLinkD3<T extends TDebugValue2 = number>
  extends SimulationNodeDatum {
  source: TTreeNodeD3<T>;
  target: TTreeNodeD3<T, 'node'>;
  id: string;
  dasharray?: string;
  width?: number;
  display?: boolean;
}

export type TTreeData<T extends TDebugValue2 = number> = {
  nodes: TTreeNodeD3<T, TNodeType>[];
  links: TTreeLinkD3<T>[];
  nodeLookup: Record<TNodeId, TTreeNodeD3<T>>;
  treeNodes: TTreeNodeD3<T, 'node'>[];
  treePointers: TTreeNodeD3<T, 'pointer'>[];
};

export interface VTreeProps<T extends TDebugValue2 = number> extends TVBase {
  value?: TTreeNode<T>;
  getNode?: (node: TTreeNodeD3<T>) => TTreeNodeD3<T>;
  onDataComputed?: (data: TTreeData<T>) => void;
  separationFactor?: number;
  renderNode?: (node: TTreeNodeD3<T>) => React.ReactElement;
  pointers?: {
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

export interface TRecursiveData {
  id: string | number;
  val: string;
  data: Record<any, any>;
  completed?: boolean;
  onStack?: boolean;
  tip?: boolean;
}

export interface TRecursiveTreeNode<T = string> extends TTreeNode<T> {
  recursiveData: TRecursiveData;
  children: TRecursiveTreeNode<T>[];
  p?: TRecursiveTreeNode<T> | null;
}

export interface TRecursiveTreeNodeD3<
  T extends TDebugValue2 = number,
  Type = TNodeType
> extends TTreeNodeD3<T, Type> {
  recursiveData: TRecursiveData;
  children: TRecursiveTreeNodeD3<T, 'node'>[];
}

export interface VRecursiveTreeProps<T extends TDebugValue2 = number>
  extends TVBase {
  trackedFn: string;
  getNode?: (node: TRecursiveTreeNodeD3<T>) => TRecursiveTreeNodeD3<T>;
  getNodeValue?: (step: TStep) => string;
  pointers?: VTreeProps<T>['pointers'];
  separationFactor?: number;
  renderNode?: (node: TRecursiveTreeNodeD3<T>) => React.ReactElement;
}

export function VRecursiveTree<T extends TDebugValue2 = number>(
  props: VRecursiveTreeProps<T>
): JSX.Element;

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

type HighlightedColor = string;
export type TLookupTableHighlight<Key extends TDebugValue> = Record<
  Key,
  HighlightedColor
>;

export type TBoxStyle = {
  color?: string;
  background?: string;
  borderColor?: string;
  fontWeight?: string | number;
};

export type TEntryStyle = {
  key: TBoxStyle;
  value: TBoxStyle;
} & TBoxStyle;

interface TVLookupTableProps<K extends string, V> extends TVBase {
  value: Record<K, V>;
  highlights?: TLookupTableHighlight<K>;
  hideRatio?: boolean;
  keyWidth?: number;
  valueWidth?: number;
  header?: [keyLabel: string, valueLabel: string];
  label?: string;
  getEntryStyle?: (entry: [K, V], style: TEntryStyle) => TEntryStyle;
}
export function VLookupTable<K extends string, V>(
  props: TVLookupTableProps<K, V>
): JSX.Element;

export type TSetElementStyle = {
  color?: string;
  background?: string;
  borderColor?: string;
  fontWeight?: string | number;
};

interface TVSetProps<K extends TDebugValue> extends TVBase {
  value?: K[];
  label?: string;
  width?: number;
  renderItem?: (value: K, position: [number, number]) => React.ReactNode;
  highlights?: TLookupTableHighlight<K>;
  getElementStyle?: (value: K, style: TSetElementStyle) => TSetElementStyle;
}
export function VSet<K extends TDebugValue>(props: TVSetProps<K>): JSX.Element;

interface TVStackProps<T extends TDebugValue> extends TVBase {
  value: T[];
  length: number;
  getElementStyle?: TSvgArrayProps<T>['getElementStyle'];
  getElementLabel?: (
    value: T,
    index: number,
    position: [x: number, y: number]
  ) => JSX.Element;
}
export function VStack<T extends TDebugValue>(
  props: TVStackProps<T>
): JSX.Element;

export type TLineStyle = {
  color?: string;
  width?: number;
};
export interface TVLineChartProps extends TVBase {
  value?: number[];
  labels: [x: string, y: string];
  getLineStyle?: (
    lineData: [number, number],
    index: number,
    styles: TLineStyle
  ) => TLineStyle;
  xPointers?: TArrayPointer[];
  xRange?: [start: number, end: number, color: string];
}
export function VLineChart(props: TVLineChartProps): JSX.Element;

export interface TVFieldProps extends TVBase {
  label: string;
  value?: TDebugValue;
  color?: string;
  width?: number;
  flashingColor?: string;
}

export function VField(props: TVFieldProps): JSX.Element;

export interface TVMatrixProps extends TVBase {
  value?: TDebugValue[][];
  highlight?: [value: TDebugValue, color: string];
  getElementStyle?: (
    value: TDebugValue,
    row: number,
    col: number,
    styles: TBoxStyle
  ) => TBoxStyle;
}

export function VMatrix(props: TVMatrixProps): JSX.Element;

export function useTestCase(): Record<string, any>;

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
    params: any[];
  }[];
  expression?: string | undefined;
  params?: any[];
  fn: {
    key: string;
    name: string;
  };
  listNodes: Record<number, TListNodeD3<any>>;
  treeNodes: Record<number, TTreeNodeD3<any>>;
  treeNodeCount: number;
};

export type TStep = {
  index: number;
  type: TStepType;
  loc: [
    lineStart: number,
    columnStart: number,
    lineEnd: number,
    columnEnd: number
  ];
  callStack: { name: string; params: any[] }[];
  attributes: {
    // callExpression
    fnName?: string;
    params?: string[];
  };
  expression?: string;
  fn: {
    key: string;
    name: string;
  };
  watch: {
    watch: object;
    local: TIdentifier;
  };
  listNodes: Record<number, TListNodeD3<TDebugValue>>;
  treeNodes: Record<number, TTreeNodeD3<TDebugValue>>;
};
