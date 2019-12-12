import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class Request extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = [{
            name: 'Roy Agasthyan',
            age: 26
        },{
            name: 'Sam Thomason',
            age: 22
        },{
            name: 'Michael Jackson',
            age: 36
        },{
            name: 'Samuel Roy',
            age: 56
        },{
            name: 'Rima Soy',
            age: 28
        },{
            name: 'Suzi Eliamma',
            age: 28
        }]

        const columns = [{
            Header: 'Name',
            accessor: 'name'
        },{
            Header: 'Age',
            accessor: 'age'
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
                                    data={data}
                                    columns={columns}
                                    defaultPageSize = {3}
                                    pageSizeOptions = {[3, 6]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Request;