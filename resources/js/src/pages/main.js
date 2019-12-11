import React, {Component} from 'react';
import {Route, Router} from 'react-router-dom';

import {NavBar, SideBar} from '../components'
import {Home, Request, NewRequest} from './index';

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='row mt-3'>
                    {/* <SideBar history={this.props.history}/> */}
                    <NavBar history={this.props.history}/>/>
                </div><br/><br/>
                <div className='container'>
                    <Route exact path='/new-request' render={() => <NewRequest />} />
                    <Route exact path='/request' render={() => <Request />} />
                    <Route exact path='/' render={() => <Home />} />
                </div>
            </div>
        );
    }
}