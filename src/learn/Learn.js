import React from 'react'
import * as d3 from 'd3'
import './OnlyTest'

export default class Learn extends React.Component {
    componentDidMount(){
        const width = 400, height = 400
        const svg = d3.select("#learn")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
        const scale = d3.scaleLinear()
            .domain([0, 130])
            .range([370, 0])
        const axis = d3.axisLeft()
            .scale(scale)
            .ticks(7)
        const xScale = d3.scaleBand()
            .domain([1,2,3,4,5])
            .range([0, 370])
        const xAxis = d3.axisBottom()
            .scale(xScale)
        svg.append("g")
            .attr("transform", "translate(30,10)")
            .call(axis)
        svg.append("g")
            .attr("transform", "translate(30,380)")
            .call(xAxis)
        
        //brush
        const brush = d3.brush()
            .extent([[0,0],[width,height]])
            .on("brush",()=>{
                console.log("brush")
            })

        var brush_g = svg.append("g")
        brush(brush_g)
    }
    render(){
        console.log("render")
        return <div id="learn" className={ this.props.c }></div>
    }
}