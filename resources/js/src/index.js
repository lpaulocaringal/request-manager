import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import {Login, Main} from './pages';

export default class App extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/home' render={({ history }) => <Main history={history} />} />
                    <Route path='/login' render={({ history }) => <Login history={history} />} />
                    <Redirect from='/' to='/login'/>
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}