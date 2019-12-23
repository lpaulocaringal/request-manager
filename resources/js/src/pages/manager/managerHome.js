import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';
import {Redirect} from 'react-router-dom';
import "react-table/react-table.css";

class ManagerHome extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const columns = [{
            Header: 'ID',
            accessor: 'request_id'
        },{
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
            'request_id':'1',
            'request':'Simple',
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
                                    getTrProps={(state, rowInfo) => {
                                        if (rowInfo && rowInfo.row) {
                                            return {
                                                onClick: (e) => {
                                                    this.props.history.push({pathname:'/view-request',data:rowInfo.original})
                                                }
                                            }
                                        }
                                        else{
                                            return {}
                                        }
                                    }}
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