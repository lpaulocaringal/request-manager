import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class NewRequest extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>New Request Form</h2>
                    </div>
                    <div className='card-body'>
                        <div className='form-group row'>
                            <div className='col-md-3 mt-2'><h5>Request</h5></div>
                            <div className='col-md-3 mt-2'>
                                <select className='form form-control'>
                                    <option>sample1</option>
                                    <option>sample2</option>
                                    <option>sample3</option>
                                </select>
                            </div>
                            <div className='col-md-3 mt-2'>
                                <select className='form form-control'>
                                    <option>sample1</option>
                                    <option>sample2</option>
                                    <option>sample3</option>
                                </select>
                            </div>
                            <div className='col-md-3 mt-2'>
                                <select className='form form-control'>
                                    <option>sample1</option>
                                    <option>sample2</option>
                                    <option>sample3</option>
                                </select>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-md-3 mt-1'><h5>Specification Name</h5></div>
                            <div className='col-md-9 mt-1'><input type='text' className='form-control'/></div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewRequest;