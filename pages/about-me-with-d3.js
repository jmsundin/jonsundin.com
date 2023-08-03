"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import ZoomableCirclePacking from "@/components/ZoomableCirclePacking";
import ForceDirectedGraph from "@/components/ForceDirectedGraph";

function AboutMeWithD3Page() {
  const [activeVisualization, setActiveVisualization] =
    useState("zoomableCirclePacking");

  const handleClick = (e) => {
    const { name } = e.target;
    e.preventDefault();
    console.log("name", name);
    setActiveVisualization(name);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center rounded-full">
        <div className="flex gap-2 p-2">
          <div className="flex-initial rounded-lg">
            {activeVisualization === "zoomableCirclePacking" && (
              <ZoomableCirclePacking name="zoomableCirclePacking" />
            )}
            {activeVisualization === "forceDirectedGraph" && (
              <ForceDirectedGraph name="forceDirectedGraph" />
            )}
          </div>
          <div className="flex flex-initial flex-col gap-2">
            <Button
              variant="outline"
              name="zoomableCirclePacking"
              onClick={handleClick}
            >
              Zoomable Circle Packing
            </Button>
            <Button
              variant="outline"
              name="forceDirectedGraph"
              onClick={handleClick}
            >
              Force Directed Graph
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeWithD3Page;
