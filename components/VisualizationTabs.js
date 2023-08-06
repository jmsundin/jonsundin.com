"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ZoomableCirclePacking from "@/components/ZoomableCirclePacking";
import ForceDirectedGraph from "@/components/ForceDirectedGraph";

export function VisualizationTabs() {
  return (
    <Tabs defaultValue="zoomableCirclePacking">
      <TabsList className="grid w-full grid-cols-2 text-white bg-indigo-500 border border-solid border-black">
        <TabsTrigger value="zoomableCirclePacking">
          Zoomable Circle Packing
        </TabsTrigger>
        <TabsTrigger value="forceDirectedGraph">
          Force Directed Graph
        </TabsTrigger>
      </TabsList>
      <TabsContent value="zoomableCirclePacking">
        <ZoomableCirclePacking />
      </TabsContent>
      <TabsContent value="forceDirectedGraph">
        <ForceDirectedGraph />
      </TabsContent>
    </Tabs>
  );
}
