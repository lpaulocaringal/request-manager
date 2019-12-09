import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import {Home} from '../components'

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                        </Navbar>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <SideNav onSelect={(selected) => {}}>
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="home">
                                <NavItem eventKey="home">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Home
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="charts">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Charts
                                    </NavText>
                                    <NavItem eventKey="charts/linechart">
                                        <NavText>
                                            Line Chart
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="charts/barchart">
                                        <NavText>
                                            Bar Chart
                                        </NavText>
                                    </NavItem>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                    </div>
                    <div> 
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}