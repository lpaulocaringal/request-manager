import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom';
import "react-table/react-table.css";

class AnalystHome extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const columns = [{
            Header: 'Request',
            accessor: 'request'
        },{
            Header: 'Date',
            accessor: 'date'
        },{
            Header: 'Resources',
            accessor: 'resources'
        },{
            Header: 'Status',
            accessor: 'status'
        }]
        return(
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='mr-auto col-md-6'><h2>Requests</h2></div>
                            <div className='col-md-6'>
                                <div className='float-md-right'><Link className='btn btn-primary' to='/new-request'>New Request</Link></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <ReactTable
                                    columns={columns}
                                    defaultPageSize = {10}
                                    pageSizeOptions = {[10, 15]}
                                />
                            </div>
                        </div>
                    </div>
                </div><br/>
            </div>
        );
    }
}

export default AnalystHome;