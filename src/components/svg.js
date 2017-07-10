import * as d3 from "d3"

export default (id, width, height)=>{
    return d3.select(id).append("svg")
        .attr("width", width || 300)
        .attr("height", height || 300)
}