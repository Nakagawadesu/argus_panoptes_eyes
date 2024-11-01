"use client";
import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";

const CytoscapeGraph = () => {
  const cyRef = useRef(null);

  useEffect(() => {
    const cy = cytoscape({
      container: cyRef.current,

      elements: [
        { data: { id: "a" } },
        { data: { id: "b" } },
        { data: { id: "c" } },
        { data: { id: "d" } },
        { data: { id: "e" } },
        {
          data: { id: "ab", source: "a", target: "b", weight: 1 },
        },
        {
          data: { id: "ac", source: "a", target: "c", weight: 2 },
        },
        {
          data: { id: "bd", source: "b", target: "d", weight: 3 },
        },
        {
          data: { id: "ce", source: "c", target: "e", weight: 4 },
        },
      ],

      style: [
        {
          selector: "node",
          style: {
            "background-color": "#6FB1FC",
            label: "data(id)",
          },
        },
        {
          selector: "edge",
          style: {
            width: "data(weight)",
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            label: "data(weight)",
          },
        },
      ],

      layout: {
        name: "grid",
        rows: 2,
      },
    });

    return () => {
      cy.destroy();
    };
  }, []);

  return <div ref={cyRef} style={{ width: "800px", height: "600px" }} />;
};

export default CytoscapeGraph;
