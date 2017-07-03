import React, { Component } from 'react'
import * as d3 from 'd3'

export default class RenderArray extends Component {
    componentDidMount(){
        const arr = ["中国行", "克莱汤普森", "科比-布莱恩特"]
        var renderArray = d3.selectAll("#renderArray p")
        renderArray.data(arr).text((d, i)=>{
            return d
        })
    }

    render(){
        return (
            <div id="renderArray">
                <p></p>
                <p></p>
                <p></p>
            </div>
        )
    }
}