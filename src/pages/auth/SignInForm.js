import React, { useState } from "react";
import axios from "axios"

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";


import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
// import { useRedirect } from "../../hooks/useRedirect";
// import { setTokenTimestamp } from "../../utils/utils";

// import styles from '../../styles/JoinUsSignInForms.module.css'

function SignInForm() {

    const setCurrentUser = useSetCurrentUser();
    // useRedirect('loggedIn')

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();
    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const {data} = await axios.post("/dj-rest-auth/login/", signInData);
        setCurrentUser(data.user)
        // setTokenTimestamp(data)
        history.goBack()
    } catch (err) {
        console.log(err)
        setErrors(err.response?.data);
    }
    };
    const handleChange = (event) => {
    setSignInData({
        ...signInData,
        [event.target.name]: event.target.value,
    });
    };
    return (
    <Row>
        <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`p-4 `}>
        <h1>Sign In</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Username"
                        name="username" 
                        value={username}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
                ))}

                <Form.Group controlId="password">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
                ))}

                <Button type="submit">
                    Sign In
                </Button>
                {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                    {message}
                </Alert>
                ))}
            </Form>
        </Container>
        <Container className={`mt-3`}>
            <p>
                Don't have an account? <span><Link to="/join">Join Now</Link></span> 
            </p>
        </Container>
        </Col>
        <Col
        md={6}
        className={`my-auto d-none d-md-block p-2`}
        >
        <Image
            src={"https://res.cloudinary.com/dgggigcvd/image/upload/v1692128577/ammonite_xtsflo.png"}
        />
        </Col>
    </Row>
    );
}

export default SignInForm;