import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import auth from '../components';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }

    async login(e){
        e.preventDefault();

        //temporary
        document.cookie = "devKey=admin";
        this.props.history.push("/");
    }

    render(){
        return(
            <form onSubmit={(e) => this.login(e)}>
                <br/><br/>
                <div className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h3>Login</h3>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='form-group row'>
                                <div className='col-md-3'>
                                    <h4>Username</h4>
                                </div>
                                <div className='col-md-9'>
                                    <input className='form form-control' type='text' value={this.state.user.username} />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-md-3'>
                                    <h4>Password</h4>
                                </div>
                                <div className='col-md-9'>
                                    <input className='form form-control' type='password' value={this.state.user.password}/>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}