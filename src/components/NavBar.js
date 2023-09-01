import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'
// import logo from '../assets/logo.png'
// import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom/'
// import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import axios from 'axios'

const NavBar = () => {

    // const currentUser = useCurrentUser()
    // const setCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            // setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const loggedInIcons = (
        <>
            <NavLink to="/blog">
                Blog
            </NavLink>
            <NavLink to="/rocks">
                Rocks
            </NavLink>
            <NavLink to="/blog/create">
                Add Post
            </NavLink>
            <NavLink to="/rocks/add">
                Add Rock
            </NavLink>
            <NavLink>
                Profile
            </NavLink>
            <NavLink to="/signin" onClick={handleSignOut}>
                Sign out
            </NavLink>
        </>
    );
    
    const loggedOutIcons = (
        <>
            <NavLink to="/blog">
                Blog
            </NavLink>
            <NavLink to="/rocks">
                Rocks
            </NavLink>
            <NavLink to="/signin">
                Sign In
            </NavLink>
            <NavLink to="/join">
                Join
            </NavLink>
            </>
        );


    return (
        <div>
            <Navbar expand="md" fixed='top'>
                <Container>
                {/* Logo */}
                <NavLink to='/'>
                    {/* <Navbar.Brand>
                        <img src={logo} className={styles.Logo} alt='logo-inside of an ammonite' />
                    </Navbar.Brand> */}
                </NavLink>
                {/* {currentUser && addPost} */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-left">
                    <NavLink to='/'>Home</NavLink>
                {/* {currentUser ? loggedInIcons : loggedOutIcons} */}
                </Nav>
            <Form inline >
                <FormControl type="text" placeholder="Search"/>
                <Button>Search</Button>
            </Form>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default NavBar