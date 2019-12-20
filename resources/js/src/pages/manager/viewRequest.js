import React, {Component} from 'react';

class ViewRequest extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>View Request</h2>
                    </div>
                    <div className='card-body'>
                        <div id='request-table'></div>
                    </div>
                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-4'></div>
                            <div className='col-md-4'><button type='submit' className='btn btn-primary form-control'>Assign Resource</button></div>
                        </div>
                    </div>
                </div><br/>
            </div>
        );
    }
}

export default ViewRequest;