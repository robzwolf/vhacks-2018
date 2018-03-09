import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import ServiceInfo from './ServiceInfo';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render((
        <BrowserRouter>
            <div id='main-container' style={{height: "100%"}}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/info" component={ServiceInfo}/>
                </Switch>
            </div>
        </BrowserRouter>),
    document.getElementById('root'));