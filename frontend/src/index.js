import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import ReviewForm from './ReviewForm';
import ServiceInfo from './ServiceInfo';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render((
        <BrowserRouter>
            <div id='main-container'>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/info" component={ServiceInfo}/>
                    <Route path="/review" component={ReviewForm} />
                </Switch>
            </div>
        </BrowserRouter>),
    document.getElementById('root'));