import React, { Component } from 'react';
import * as d3 from "d3";
import './App.css';

class App extends Component {

    componentDidMount(){
        window.noded3 = d3
        console.log(d3)
    }

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>This is a d3-demo!</h2>
				</div>
				<div className="d3">
						
				</div>
			</div>
		);
	}
}

export default App;
