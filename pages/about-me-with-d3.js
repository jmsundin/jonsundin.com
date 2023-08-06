"use client";

import { useState, useRef, useEffect } from "react";

import { VisualizationTabs } from "@/components/VisualizationTabs";
import ZoomableCirclePacking from "@/components/ZoomableCirclePacking";
import ForceDirectedGraph from "@/components/ForceDirectedGraph";

// import SmoothZoom from "@/components/SmoothZoom";

function AboutMeWithD3Page() {
  const [activeVisualization, setActiveVisualization] = useState(null);

  const handleClick = (e) => {
    const { name } = e.target;
    e.preventDefault();
    console.log("name: ", name);
    setActiveVisualization(name);
    console.log("activeVisualization: ", activeVisualization);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center rounded-full">
        <div className="flex flex-col justify-center sm:flex-row gap-2 p-2">
          <div className="flex flex-initial order-last sm:order-first rounded-lg">
            <VisualizationTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeWithD3Page;
