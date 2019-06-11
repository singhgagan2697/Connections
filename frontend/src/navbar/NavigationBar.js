import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import axios from 'axios';

class NavigationBar extends Component {
    
    constructor(props) {
        super(props);
        this.createUser = this.createUser.bind(this);
    }

    createUser() {
        axios.post('http://localhost:5000/user', {email: 'email@email.com', password:'password'}).then((user) => {
            console.log(user);
        });
    }

    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Connections</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-narvar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link onClick={() => this.createUser()}>API USER TEST</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
        );
    }
}

export default NavigationBar;