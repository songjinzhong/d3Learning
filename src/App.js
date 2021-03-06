import React, { Component } from 'react';
import * as d3 from "d3";
import './App.css';

import RenderArray from './components/RenderArray.js'
import RenderRect from './components/RenderRect.js'
import RenderProportion from './components/RenderProportion.js'
import RenderCoordinate from './components/RenderCoordinate.js'
import RenderColumn from './components/RenderColumn.js'
import Dymatic from './components/Dymatic.js'
import PieChart from './components/PieChart.js'
import ForceGraph from './components/ForceGraph.js'
import PackingChart from './components/PackingChart'
import ChinaMap from './components/MapChina'

class App extends Component {

    componentDidMount(){
        this.renderText()
    }

    renderText(){
        const d3DIC = d3.select("body").select(".d3").text("宋进忠")
        d3DIC.style("color", "red").style("font-size", "30px")
    }

	render() {
		return (
			<div className="App">
                <h2>This is a d3-demo!</h2>
				<div className="d3"></div>
                <div id="circle"></div>
                <h2>RenderArray</h2>
                <RenderArray></RenderArray>
                <h2>RenderRect</h2>
                <RenderRect></RenderRect>
                <h2>Proportion</h2>
                <RenderProportion/>
                <h2>Coordinate</h2>
                <RenderCoordinate/>
                <h2>Column</h2>
                <RenderColumn/>
                <h2>Dymatic</h2>
                <Dymatic/>
                <h2>PieChart</h2>
                <PieChart/>
                <h2>ForceGraph</h2>
                <ForceGraph />
                <h2>PackingChart</h2>
                <PackingChart/>
                <h2>ChinaMap</h2>
                <ChinaMap/>
			</div>
		);
	}
}

export default App;
