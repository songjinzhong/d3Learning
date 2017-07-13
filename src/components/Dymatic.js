import React from 'react'
import * as d3 from 'd3'
import RenderSvg from './svg'

export default class Dymatic extends React.Component {
    componentDidMount(){
        const width = 400
        const height = 400
        const svg = RenderSvg("#dymatic", width, height)
        const circle = svg.append("circle")
            .attr("cx", 100)
            .attr("cy", 100)
            .attr("r", 45)
            // .style("fill","green");
            .attr("fill", "green")
        circle.transition()
            .duration(3000)
            .attr("cx", 200)
            // .style("fill", "orange")
            .attr("fill", "orange")
            .attr("r", 10)
        circle.on("mouseover", () => {
            d3.select(d3.event.target)
                .attr("fill", "red")
        })
        circle.on("mouseout", ()=>{
            d3.select(d3.event.target)
                .transition()
                .duration(300)
                .attr("fill", "orange")
        })
    }
    render(){
        return <div id="dymatic"></div>
    }
}