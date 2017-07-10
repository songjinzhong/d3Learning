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

var rectPadding = 4;
 
        //添加矩形元素
        var rects = svg.selectAll(".MyRect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class","MyRect")
            .attr("transform","translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function(d,i){
                return xScale(i) + rectPadding/2;
            } )
            .attr("y",function(d){
                return yScale(d);
            })
            .attr("width", xScale.bandwidth() - rectPadding )
            .attr("height", function(d){
                return height - padding.top - padding.bottom - yScale(d);
            })
            .attr("fill", "orange")
 
        //添加文字元素
        var texts = svg.selectAll(".MyText")
            .data(dataset)
            .enter()
            .append("text")
            .attr("class","MyText")
            .attr("transform","translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function(d,i){
                return xScale(i) + rectPadding/2;
            } )
            .attr("y",function(d){
                return yScale(d);
            })
            .attr("dx",function(){
                return (xScale.bandwidth() - rectPadding)/2;
            })
            .attr("dy",function(d){
                return 20;
            })
            .text(function(d){
                return d;
            });
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