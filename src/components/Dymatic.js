import React from 'react'
// import * as d3 from 'd3'
import RenderSvg from './svg'

export default class Dymatic extends React.Component {
    componentDidMount(){
        const width = 400
        const height = 400
        const svg = RenderSvg("#dymatic", width, height)
        const circle1 = svg.append("circle")
            .attr("cx", 100)
            .attr("cy", 100)
            .attr("r", 45)
            .style("fill","green");
        circle1.transition()
            .duration(3000)
            .attr("cx", 200)
            .style("fill", "orange")
            .attr("r", 10)
    }
    render(){
        return <div id="dymatic"></div>
    }
}