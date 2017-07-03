import React, { Component } from 'react';
import * as d3 from "d3";
import './App.css';

import RenderArray from './components/RenderArray.js'

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
				<div className="App-header">
					<h2>This is a d3-demo!</h2>
				</div>
				<div className="d3"></div>
                <div id="circle"></div>
                <h2>RenderArray</h2>
                <RenderArray></RenderArray>
			</div>
		);
	}
}

export default App;
