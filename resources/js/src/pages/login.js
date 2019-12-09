import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component{
    constructor(props){
        super(props);
    }

    async login(e){
        e.preventDefault();

        //temporary
        document.cookie = "adminKey=admin";
        this.props.history.push("/main");
    }

    render(){
        return(
            <form onSubmit={(e) => this.login(e)}>
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
                                    <input type='text'/>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-md-3'>
                                    <h4>Password</h4>
                                </div>
                                <div className='col-md-9'>
                                    <input type='password'/>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <input type='submit' className='btn btn-primary'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}