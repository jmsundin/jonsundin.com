"use client";
import { VisualizationTabs } from "@/components/VisualizationTabs";

function AboutMeWithD3Page() {
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
