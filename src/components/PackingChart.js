import React from 'react'
import * as d3 from 'd3'
import RenderSvg from './svg'
import city from './json/city.json'

export default class PackingChart extends React.Component {
    componentDidMount(){
        const width = 600
        const height = 600
        const svg = RenderSvg("#packingchart", width, height)
        const pack = d3.pack(city)
            .size([width, height])
            .radius(()=>{
                return 20
            })
        const nodes = d3.hierarchy(city)
        const city_nodes = pack(nodes).descendants()

        svg.selectAll("text")
            .data(city_nodes)
            .enter()
            .append("text")
            .text(d => {
                return d.data.name
            })
            .attr("x", d=>{
                return d.x
            })
            .attr("y", d=>{
                return d.y
            })
            .attr("font-size", "10px")
            .attr("dx", d=>{
                return `-${d.data.name.length * 5}px`
            })
            .attr("dy", "3px")
            .attr("fill-opacity", d=>{
                if(d.children){
                    return 0
                }
            })
        svg.selectAll("circle")
            .data(city_nodes)
            .enter()
            .append("circle")
			.attr("fill","#ccc")
            .attr("fill-opacity","0.4")
            .attr("cx", d=>{
                return d.x
            })
            .attr("cy", d=>{
                return d.y
            })
            .attr("r", d=>{
                return d.r
            })
            .on("mouseover", function(){
                d3.select(this)
                    .attr("fill", "orange")
            })
            .on("mouseout", function(){
                d3.select(this)
                    .attr("fill", "#ccc")
            })
    }
    render(){
        return <div id="packingchart"></div>
    }
}