import React, {Component} from 'react';
import {Route, Router} from 'react-router-dom';

import {NavBar, SideBar} from '../components'
import {Home, Request, NewRequest} from './analyst';

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    getCookie(name) {
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
    }

    render(){
        if(this.getCookie("accessKey") == "analyst"){
            return(
                <div>
                    <div className='row mt-3'>
                        <NavBar history={this.props.history}/>/>
                    </div><br/><br/>
                    <div className='container'>
                        <Route exact path='/new-request' render={() => <NewRequest />} />
                        <Route exact path='/' render={() => <Home />} />
                    </div>
                </div>
            );
        }
        else if(this.getCookie("accessKey") == "developer"){
            return(
                <div>
                    <div className='row mt-3'>
                        <NavBar history={this.props.history}/>/>
                    </div><br/><br/>
                    {/* <div className='container'>
                        <Route exact path='/new-request' render={() => <NewRequest />} />
                        <Route exact path='/request' render={() => <Request />} />
                        <Route exact path='/' render={() => <Home />} />
                    </div> */}<h1>Dev</h1>
                </div>
            );
        }
        else{
            return(
                <div>
                    <h1>Error Logging In</h1>
                    <button onClick={this.props.history.push('/login')}>Go back to Login</button>
                </div>
            );
        }
    }
}