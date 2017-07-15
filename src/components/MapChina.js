import React from 'react'
import * as d3 from 'd3'
import RenderSvg from './svg'
import ChinaJson from './json/china.json'

export default class MapChina extends React.Component {
    componentDidMount(){
        const width=1000
        const height=1000
        const svg = RenderSvg("#mapchina", width,height)
        const projection = d3.geoMercator()
            .center([107, 31])
            .scale(750)
            .translate([width/2, height/2])
        const path = d3.geoPath()
            .projection(projection)
        const color = d3.schemeCategory20
        svg.selectAll("path")
            .data(ChinaJson.features)
            .enter()
            .append("path")
            .attr("stroke","#000")
            .attr("stroke-width",1)
            .attr("fill", (d,i)=>{
                return color[i % 20]
                // return "#ccc"
            })
            .attr("d", path)
            .on("mouseover", function(){
                d3.select(this)
                    .attr("fill", "orange")
            })
            .on("mouseout", function(d, i){
                d3.select(this)
                    .attr("fill", color[i%20])
            })

    }
    render(){
        return <div id="mapchina"></div>   
    }
}