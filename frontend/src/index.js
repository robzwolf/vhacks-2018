import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render((
        <BrowserRouter>
            <div style={{height: "100%"}}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>),
    document.getElementById('root'));