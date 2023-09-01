import React from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Navbar expand="md">
                <NavLink to='/'>
                    <Navbar.Brand>Fossils & Rocks</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-left">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/signin'>Sign In</NavLink>
                <NavLink to='/join'>Join</NavLink>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default NavBar