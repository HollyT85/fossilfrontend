import React from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar expand="md">
        <Navbar.Brand>Fossils & Rocks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Sign In</Nav.Link>
                <Nav.Link>Join</Nav.Link>
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