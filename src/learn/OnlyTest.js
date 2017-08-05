import * as d3 from 'd3'

(function(){
    var matrix = [
        [11975,  5871, 8916, 2868],
        [ 1951, 10048, 2060, 6171],
        [ 8010, 16145, 8090, 8045],
        [ 1013,   990,  940, 6907]
    ]
    const chord = d3.chord()
        // .chord(matrix)
    window.chord = chord
    console.log(chord, matrix)
})()

// const OnlyTest = {}

// export default OnlyTest