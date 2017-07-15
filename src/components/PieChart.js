import React from 'react'
import * as d3 from 'd3'
import RenderSvg from './svg'

export default class PieChart extends React.Component {
    componentDidMount(){
        const width = 400
        const height = 400
        const svg = RenderSvg("#piechart", width, height)
        const dataSet = [ 20 , 20 , 33 , 55 , 23 ]
        const pie = d3.pie()
        const pieData = pie(dataSet)
        const outerRadius = 150
        const innerRadius = 0
        const arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
        const bigArc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius + 5)
        const colorArr = d3.schemeCategory10
        const arcs = svg.selectAll("g")
            .data(pieData)
            .enter()
            .append("g")
            .attr("transform","translate("+ (width/2) +","+ (width/2) +")")
        arcs.append("path")
            .attr("fill",function(d,i){
                return colorArr[i];
            })
            .attr("d",function(d){
                return arc(d);   //调用弧生成器，得到路径值
            })
            .on("mouseover", () => {
                d3.select(d3.event.target)
                    .attr("d", (d) => {
                        return bigArc(d)
                    })
            })
            .on("mouseout", () => {
                d3.select(d3.event.target)
                    .attr("d", (d) => {
                        return arc(d)
                    })
            })

        arcs.append("text")
            .attr("transform",function(d){
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor","middle")
            .text(function(d){
                return d.data;
            });
            }
    render(){
        return <div id="piechart"></div>   
    }
}