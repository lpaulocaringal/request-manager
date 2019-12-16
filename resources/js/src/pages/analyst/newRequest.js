import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class NewRequest extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     newRequest: {
        //         request: [

        //         ]
        //     }
        // }
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
                            <div className='col-md-3'>Request</div>
                            <div className='col-md-3'>
                                <select className='form form-control'>
                                    <option>sample1</option>
                                    <option>sample2</option>
                                    <option>sample3</option>
                                </select>
                            </div>
                            <div className='col-md-3'>
                                <select className='form form-control'>
                                    <option>sample1</option>
                                    <option>sample2</option>
                                    <option>sample3</option>
                                </select>
                            </div>
                            <div className='col-md-3'>
                                <select className='form form-control'>
                                    <option>sample1</option>
                                    <option>sample2</option>
                                    <option>sample3</option>
                                </select>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-md-3'>Specification Name</div>
                            <div className='col-md-9'><input type='text' className='form-control'/></div>
                        </div>
                        <div className='form-group row'>
                             <div className='col-md-3'>FMT Path</div>
                             <div className='col-md-9'><input type='text' className='form-control'/></div>
                        </div>
                        <div className='form-group row'>
                             <div className='col-md-3'>Cloned From</div>
                             <div className='col-md-9'><input type='text' className='form-control'/></div>
                        </div>
                        <div className='form-group row'>
                             <div className='col-md-3'>Library/Solution ID</div>
                             <div className='col-md-9'><input type='text' className='form-control'/></div>
                        </div>
                        <div className='form-group row'>
                             <div className='col-md-3'>Lookup Table(s)</div>
                             <div className='col-md-9'><input type='text' className='form-control'/></div>
                        </div>
                        <div className='form-group row'>
                             <div className='col-md-3'>Release Note(s)</div>
                             <div className='col-md-9'><textarea className='form-control'></textarea></div>
                        </div>
                        <div className='form-group row'>
                             <div className='col-md-3'>Attachments</div>
                             <div className='col-md-9'><input type='text' className='form-control'/></div>
                        </div>
                        <div className='form-group row'>
                             <div className='col-md-3'>BG Customer Name</div>
                             <div className='col-md-9'><input type='text' className='form-control'/></div>
                        </div>
                        <div className='form-group row'>
                             <div className='col-md-3'>BG Project Name</div>
                             <div className='col-md-9'><input type='text' className='form-control'/></div>
                        </div>
                        <div className='form-group row'>
                             <div className='col-md-3'>BG Task</div>
                             <div className='col-md-9'><input type='text' className='form-control'/></div>
                        </div>
                        <div className='form-group row'>
                             <div className='col-md-3'>AI Synopsis</div>
                             <div className='col-md-9'><input type='text' className='form-control'/></div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-4'></div>
                            <div className='col-md-4'><button type='submit' className='btn btn-primary form-control'>Submit</button></div>
                        </div>
                    </div>
                </div><br/>
            </div>
        );
    }
}

export default NewRequest;