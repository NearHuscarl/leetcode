import React from "react";
import { useVisualizerData, VLinkedList } from "visualizer";
import { red, purple, amber, lightGreen, lightBlue, teal, alpha, blue } from "colors";

export const Visualizer = () => {
  const { data, expression, type, nodes } = useVisualizerData();
  const { prefixNode, cur, list1, list2, cur1, cur2 } = data;

  return (
    <VLinkedList
      nodes={nodes}
      getNode={n => {
        const test = type === 'testExpressionSuccess';
        if (expression === 'cur1.val < cur2.val') {
          const cur1 = n.references.some(x => x === 'cur1');
          const cur2 = n.references.some(x => x === 'cur2');
          if (cur1) n.color = test ? lightGreen[500] : red[500];
          if (cur2) n.color = test ? red[500] : lightGreen[500];
        }

        return n;
      }}
      pointers={[
        { name: "list1", value: list1, color: amber[500], isHead: true, colorNode: true },
        {
          name: "head", value: prefixNode, color: teal["500"], isHead: true,
          isTail: n => n.references.some(p => p === 'cur')
        },
        { name: "list2", value: list2, color: lightBlue[500], isHead: true, colorNode: true },
        { name: "cur", value: cur, color: red[500], },
        { name: "cur1", value: cur1, color: amber[700] },
        { name: "cur2", value: cur2, color: lightBlue[700] },
      ]}
    />
  );
};
