import React from 'react'
import * as d3 from 'd3'
import RenderSvg from './svg'

export default class Chordal extends React.Component {
    componentDidMount(){
        const height = 400
        const width = 400
        const svg = RenderSvg("#chordal", width,height)
    }
    render(){
        return <div id="chordal"></div>
    }
}