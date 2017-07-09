import * as d3 from "d3"

export default (id)=>{
    return d3.select(id).append("svg")
        .attr("width", 300)
        .attr("height", 300)
}