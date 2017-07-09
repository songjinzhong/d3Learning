import React from 'react'
import * as d3 from 'd3'

import RenderSvg from './svg'
import './styles/axis.css'

export default class RenderCoordinate extends React.Component {
    componentDidMount(){
        const dataSet = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];
        const linear = d3.scaleLinear()
            .domain([0, d3.max(dataSet)])
            .range([0, 250])

       const axis = d3.axisBottom()
            .scale(linear)
            .ticks(7)
        const svg = RenderSvg("#coordinate")
        svg.append("g")
            .attr("class", "axis")
            .attr("transform",`translate(0, ${dataSet.length * 25 + 5})`)
            .call(axis)
        svg.selectAll("rect")
            .data(dataSet)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", (v, i)=>{
                return i * 25
            })
            .attr("width", (v)=>{
                return Math.round(linear(v))
            })
            .attr("height", (v)=>{
                return 23
            })
            .attr("fill", "orange")
    }
    render(){
        return (
            <div id="coordinate"></div>
        )
    }
}