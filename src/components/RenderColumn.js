import React from 'react'
import * as d3 from 'd3'
import RenderSvg from './svg'

export default class RenderColumn extends React.Component {
    componentDidMount(){
        const width = 400
        const height = 400
        const svg = RenderSvg("#column", width, height)
        const padding = {left:30, right:30, top:20, bottom:20}
        var dataset = [10, 20, 30, 40, 33, 24, 12, 5];
        window.d3 = d3
        //x轴的比例尺
        var xScale = d3.scaleBand()
            .domain(d3.range(dataset.length))
            .range([0, width - padding.left - padding.right])
        
        //y轴的比例尺
        var yScale = d3.scaleLinear()
            .domain([0,d3.max(dataset)])
            .range([height - padding.top - padding.bottom, 0]);

        //定义x轴
        var xAxis = d3.axisBottom()
            .scale(xScale)
                
        //定义y轴
        var yAxis = d3.axisLeft()
            .scale(yScale)
            .ticks(10)

        var rectPadding = 4;
        
        const bandwidth = xScale.bandwidth()

        //添加矩形元素
        svg.selectAll(".MyRect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class","MyRect")
            .attr("transform","translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function(d,i){
                return xScale(i) + rectPadding/2;
            } )
            .attr("y",function(d){
                return height - padding.bottom - padding.top
                // return yScale(d);
            })
            .attr("width", xScale.bandwidth() - rectPadding )
            .attr("height", function(d){
                return 0
                // return height - padding.top - padding.bottom - yScale(d);
            })
            .attr("fill", "orange")
            .on("mouseover", ()=>{
                console.log(this)
                d3.select(d3.event.target)
                    .attr("fill", "red")
            })
            .on("mouseout", ()=>{
                d3.select(d3.event.target)
                    .attr("fill", "orange")
            })
            .transition()
            .delay((d, i)=>{
                return i*1000
            })
            .duration(2000)
            // .ease("bounce")
            .attr("height", function(d){
                return height - padding.top - padding.bottom - yScale(d)
            })
            .attr("y", (d) => {
                return yScale(d)
            })
 
        //添加文字元素
        svg.selectAll(".MyText")
            .data(dataset)
            .enter()
            .append("text")
            .attr("class","MyText")
            .attr("transform","translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function(d,i){
                return xScale(i) + bandwidth/3;
            } )
            .attr("y",function(d){
                // return yScale(d);
                const min = yScale.domain()[0]
                return yScale(min)
            })
            .text(function(d){
                return d;
            })
            .transition()
            .delay((d, i)=>{
                return i*1000
            })
            .duration(2000)
            // .ease("bounce")
            .attr("y", function(d){
                return yScale(d)
            })
        // 添加x轴
        svg.append("g")
        .attr("class","axis")
        .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
        .call(xAxis); 
                
        //添加y轴
        svg.append("g")
        .attr("class","axis")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .call(yAxis);
    }
    render(){
        return (
            <div id="column"></div>
        )
    }
}