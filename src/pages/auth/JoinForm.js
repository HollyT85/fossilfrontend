import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


import {
Form,
Button,
Image,
Col,
Row,
Container,
Alert,
} from "react-bootstrap";
import axios from "axios";


// import styles from '../../styles/JoinUsSignInForms.module.css'
// import { useRedirect } from "../../hooks/useRedirect";

const JoinUs = () => {

    // useRedirect('loggedIn')
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });
const { username, password1, password2 } = signUpData;

const [errors, setErrors] = useState({});

const history = useHistory();

const handleChange = (event) => {
    setSignUpData({
        ...signUpData,
        [event.target.name]: event.target.value,
    });
    };

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post("/dj-rest-auth/registration/", signUpData);
        history.push("/signin");
    } catch (err) {
        setErrors(err.response?.data);
    }
    };

    return (
    <Row>
        <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`p-4 `}>
            <h1>Join</h1>
            <p>
                Rocks & Fossils
            </p>

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
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}

            <Form.Group controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
                />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                {message}
                </Alert>
            ))}

            <Form.Group controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
                />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                {message}
                </Alert>
            ))}

            <Button type="submit">
                Join
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
                Already have an account? <span><Link to="/signin">Sign in</Link></span> 
            </p>
        </Container>
        </Col>
        <Col
        md={6}
        className={`my-auto d-none d-md-block p-2`}
        >
        <Image
            src={
                'https://res.cloudinary.com/dgggigcvd/image/upload/v1692128577/ammonite_xtsflo.png'
            }
        />
        </Col>
    </Row>
    );
};

export default JoinUs;