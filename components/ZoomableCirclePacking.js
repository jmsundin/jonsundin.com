import * as d3 from "d3";
import { createElement, useEffect, useRef } from "react";

import { aboutMe } from "@/data/about-me-data";

export default function ZoomableCirclePacking() {
  const svgRef = useRef(null);
  var scale = 0.7;

  // Specify the chart’s dimensions.
  const width = 960;
  const height = 700;

  useEffect(() => {
    // Create the color scale.
    const color = d3
      .scaleLinear()
      .domain([0, 5])
      .range(["#a5b4fc", "#e0e7ff"])
      .interpolate(d3.interpolateHcl);

    const radius = 4;
    const padding = 2;
    const pack = (aboutMe) => {
      return d3.pack().size([width, height]).padding(padding)(
        d3
          .hierarchy(aboutMe)
          .sum((d) => d.value)
          .sort((a, b) => b.value - a.value)
      );
    };

    const circles = (aboutMe) => {
      return d3.packSiblings(
        d3.range(aboutMe.children.length).map(() => ({ r: radius + padding }))
      );
    };
    const root = pack(aboutMe);
    const nodes = root.descendants();
    // const circles = pack(aboutMe);

    const svgSelection = d3.select(svgRef.current);
    svgSelection
      .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
      .attr("width", width)
      .attr("height", height)
      .attr("style", `background: ${color(0)}; cursor: pointer;`);

    // Append the nodes.
    const node = svgSelection
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("fill", (d) => (d.children ? color(d.depth) : "white"))
      .attr("pointer-events", (d) => (!d.children ? "none" : null))
      .on("mouseover", function () {
        d3.select(this).attr("stroke", "#000");
      })
      .on("mouseout", function () {
        d3.select(this).attr("stroke", null);
      })
      .on(
        "click",
        (event, d) => focus !== d && (zoom(event, d), event.stopPropagation())
      );

    // Append the text labels.
    const nameLabelLine1 = svgSelection
      .append("g")
      .style("font", "10px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .style("fill-opacity", (d) => (d.parent === root ? 1 : 0))
      .style("display", (d) => (d.parent === root ? "inline" : "none"))
      .classed("text-lg", true)
      .classed("font-bold", true)
      .text((d) => d.data.name.split(" ").slice(0, 3).join(" "));

    const nameLabelLine2 = svgSelection
      .append("g")
      .style("font", "10px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .style("fill-opacity", (d) => (d.parent === root ? 1 : 0))
      .style("display", (d) => (d.parent === root ? "inline" : "none"))
      .classed("text-lg", true)
      .classed("font-bold", true)
      .text((d) => d.data.name.split(" ").slice(3).join(" "));

    const descriptionLabelLine1 = svgSelection
      .append("g")
      .style("font", "10px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants())
      .join("text")
      .style("fill-opacity", (d) => (d.parent === root ? 1 : 0))
      .style("display", (d) => (d.parent === root ? "inline" : "none"))
      .classed("text-sm", true)
      .attr("dy", (d) => (d.parent !== root ? "2.5em" : "1em"))
      .text((d) => d.data.description.split(" ").slice(0, 4).join(" "));

    const descriptionLabelLine2 = svgSelection
      .append("g")
      .style("font", "10px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants())
      .join("text")
      .style("fill-opacity", (d) => (d.parent === root ? 1 : 0))
      .style("display", (d) => (d.parent === root ? "inline" : "none"))
      .classed("text-sm", true)
      .attr("dy", (d) => (d.parent !== root ? "2.5em" : "1em"))
      .text((d) => d.data.description.split(" ").slice(4).join(" "));

    // Create the zoom behavior and zoom immediately in to the initial focus node.
    svgSelection.on("click", (event) => zoom(event, root));
    let focus = root;
    let view;
    zoomTo([focus.x, focus.y, focus.r * 2]);

    function zoomTo(v) {
      const k = width / v[2];

      view = v;

      nameLabelLine1.attr(
        "transform",
        (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
      );
      nameLabelLine2.attr(
        "transform",
        (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k + 20})`
      );

      descriptionLabelLine1.attr(
        "transform",
        (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k + 10})`
      );
      descriptionLabelLine2.attr(
        "transform",
        (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k + 30})`
      );

      node.attr(
        "transform",
        (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
      );
      node.attr("r", (d) => d.r * k);
    }

    function zoom(event, d) {
      const focus0 = focus;

      focus = d;

      const transition = svgSelection
        .transition()
        .duration(event.altKey ? 7500 : 750)
        .tween("zoom", (d) => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return (t) => zoomTo(i(t));
        });

      nameLabelLine1
        .filter(function (d) {
          return d.parent === focus || this.style.display === "inline";
        })
        .transition(transition)
        .style("fill-opacity", (d) => (d.parent === focus ? 1 : 0))
        .on("start", function (d) {
          if (d.parent === focus) this.style.display = "inline";
        })
        .on("end", function (d) {
          if (d.parent !== focus) this.style.display = "none";
        });
      nameLabelLine2
        .filter(function (d) {
          return d.parent === focus || this.style.display === "inline";
        })
        .transition(transition)
        .style("fill-opacity", (d) => (d.parent === focus ? 1 : 0))
        .on("start", function (d) {
          if (d.parent === focus) this.style.display = "inline";
        })
        .on("end", function (d) {
          if (d.parent !== focus) this.style.display = "none";
        });

      descriptionLabelLine1
        .filter(function (d) {
          return d.parent === focus || this.style.display === "inline";
        })
        .transition(transition)
        .style("fill-opacity", (d) => (d.parent === focus ? 1 : 0))
        .on("start", function (d) {
          if (d.parent === focus) this.style.display = "inline";
        })
        .on("end", function (d) {
          if (d.parent !== focus) this.style.display = "none";
        });

      descriptionLabelLine2
        .filter(function (d) {
          return d.parent === focus || this.style.display === "inline";
        })
        .transition(transition)
        .style("fill-opacity", (d) => (d.parent === focus ? 1 : 0))
        .on("start", function (d) {
          if (d.parent === focus) this.style.display = "inline";
        })
        .on("end", function (d) {
          if (d.parent !== focus) this.style.display = "none";
        });
    }
  }, [svgRef]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 960 700"
      width="100%"
      height="100%"
      scale={scale}
      className="w-full h-full rounded-lg"
    ></svg>
  );
}
