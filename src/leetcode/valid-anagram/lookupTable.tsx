import React from "react";
import { useVisualizerData, VLookupTable, VArray } from "visualizer";
import { red, green, amber, teal, interpolateRgb } from "colors";

export const Visualizer = () => {
  const { data } = useVisualizerData();
  const { freq1, freq2, s = "", t = "", i } = data;

  return (
    <>
      <VArray
        position={{ x: 0, y: 30 }}
        label="s"
        value={s.split("")}
        pointers={[{ name: "i", value: i, color: red[500] }]}
      />
      <VArray
        position={{ x: 300, y: 30 }}
        label="t"
        value={t.split("")}
        pointers={[{ name: "i", value: i }]}
      />
      <VLookupTable position={{ x: 0, y: 110 }} value={freq1} />
      <VLookupTable position={{ x: 300, y: 110 }} value={freq2} />
    </>
  );
};
