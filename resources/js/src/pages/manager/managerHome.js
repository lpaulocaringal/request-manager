import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom';
import "react-table/react-table.css";

class ManagerHome extends Component{
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

        const data = [{
            'request':'simple',
            'date':'05-16-1999',
            'resources':'Luis Caringal',
            'status':'Ongoing'
        }]
        return(
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='mr-auto col-md-6'><h2>Requests</h2></div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <ReactTable
                                    data={data}
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

export default ManagerHome;