import React, { Component } from 'react'
import * as d3 from 'd3'

export default class RenderRect extends Component {
    componentDidMount(){
        const width = 300
        const height = 300
        const svg = d3.select("#renderRect")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
        window.svg = svg
        var dataset = [ 250 , 210 , 170 , 130 , 90 ];  //数据（表示矩形的宽度）
        var rectHeight = 25;   //每个矩形所占的像素高度(包括空白)
        
        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x",0)
            .attr("y",function(d,i){
                return i * rectHeight;
            })
            .attr("width",function(d){
                return d;
            })
            .attr("height",rectHeight-2)
            .attr("fill","black");
    }

    render(){
        return (
            <div id="renderRect"></div>
        )
    }
}