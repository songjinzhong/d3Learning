import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Test from './Test'

const RenderLeft = (props) => {
    return (
        <div id="left">
            <ul>
                <li><Link to="/">主页</Link></li>
                <li><Link to="/l">学习</Link></li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    (
        <Router>
            <div>
                <RenderLeft/>
                <div id="right">
                    <Route path="/" exact={ true } component={App}/>
                    <Route path="/l" component={ Test }/>
                </div>
            </div>
        </Router>
    )
    , document.getElementById('root'));
registerServiceWorker();
