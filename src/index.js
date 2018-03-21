import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import {MovieDetail} from "./MovieDetail";
ReactDOM.render((
    <div>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/movie-detail/:movieId' component={MovieDetail} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
), document.getElementById('root'));
