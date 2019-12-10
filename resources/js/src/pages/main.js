import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';

import {NavBar, SideBar} from '../components'
import {Home, Request} from './index';

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='col mt-3'>
                    <SideBar history={this.props.history}/>
                </div>
                <div className='col'>
                    <div className='main-container'>
                        <div className='main py-4'>
                            <Route exact path='/request' render={()=><Request/>} />
                            <Route exact path='/home' render={()=><Home/>} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}