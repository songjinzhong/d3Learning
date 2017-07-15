import React from 'react'
import * as d3 from 'd3'
import RenderSvg from './svg'

export default class ForceGraph extends React.Component {
    componentDidMount(){
        const width = 960
        const height = 500
        const svg = RenderSvg("#forcegraph", width, height).append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

        //data
        
        var n = 100,
            nodes = d3.range(n).map(function(i) { return {index: i}; }),
            links = d3.range(n).map(function(i) { return {source: i, target: (i + 3) % n}; });

        const simulation = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody().strength(-80))
            .force("link", d3.forceLink(links).distance(20).strength(1))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
            .stop()
          for (var i = 0, nn = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < nn; ++i) {
                simulation.tick();
            }
        svg.append("g")
            .attr("stroke", "red")
            .attr("stroke-width", 1.5)
            .selectAll("line")
            .data(links)
            .enter()
            .append("line")
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
        const color = d3.schemeCategory20
        svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(nodes)
            .enter()
            .append("circle")
            .attr("r", 5)
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("fill", (v, i) => {
                return color[i % 20]
            })

        
    }
    render(){
        return <div id="forcegraph"></div>
    }
}
