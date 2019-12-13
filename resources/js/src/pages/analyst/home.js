import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom';
import "react-table/react-table.css";

class Home extends Component{
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
                <Link className='btn btn-primary' to='/new-request'>New Request</Link>
                <br/><br/>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Requests</h2>
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
                </div>
            </div>
        );
    }
}

export default Home;