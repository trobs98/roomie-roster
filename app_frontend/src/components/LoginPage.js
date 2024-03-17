import React, { useState } from "react";
import { Container, Button, Form, Row, Col, InputGroup, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { setUserLogin, getUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    const isValidEmail = (email) => {
        const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        return emailRegex.test(email);
    }

    const isValidPassword = (password) => {
        const letters = /[a-zA-Z]/;
        const numbers = /[0-9]/;
        const specialCharacters = /[$&+,:;=?@#|'<>.^*()%!-]/;

        return letters.test(password) && numbers.test(password) && specialCharacters.test(password) && password.length > 7 && password.length < 21
    }

    const onPasswordChange = (html) => {
        setPassword(html.target.value);
    }

    const onEmailAddressChange = (html) => {
        setEmailAddress(html.target.value);
    }

    const onSubmitClick = (event) => {
        const isEmailValid = isValidEmail(emailAddress);
        const isPasswordValid = isValidPassword(password);

        setEmailValid(isEmailValid);
        setPasswordValid(isPasswordValid);

        if (!isEmailValid || !isPasswordValid) {
            event.preventDefault();
            event.stopPropagation();
            return;
        } else {
            // Submit api post call to login to server
            dispatch(setUserLogin({email: emailAddress, password: password}));
            event.preventDefault();
            event.stopPropagation();
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <Col>
                <Row className="align-items-center">
                    <h2 className="text-center mt-5">
                        Roomie Roster
                    </h2>
                </Row>
                <Row style={{ display: user.error ? "block" : "none"}}>
                    <Alert variant="danger">
                        {user.error}
                    </Alert>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col md={6}>
                        <Form noValidate onSubmit={onSubmitClick}>
                            <Form.Group className="mb-3" controlId="loginFormEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Login with your email" 
                                    defaultValue={emailAddress} 
                                    onChange={onEmailAddressChange} 
                                    isInvalid={!emailValid} 
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="loginFormPassword">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <Form.Control 
                                        type={passwordVisible ? "text" : "password"} 
                                        placeholder="Enter password" 
                                        defaultValue={password} 
                                        onChange={onPasswordChange} 
                                        isInvalid={!passwordValid} 
                                        required
                                    />
                                    <Button variant="light" style={{borderColor:"#dee2e6"}} onClick={() => setPasswordVisible(!passwordVisible)}>
                                        <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                                    </Button>
                                    <Form.Text id="passwordHelpBlock">
                                        Your password must be 8-20 characters long, contain at least one letter, one number and one special character
                                    </Form.Text>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid password following the provided format
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Link to={`/forgot-password`}>Forgot Password?</Link>
                            
                            <Container className="text-center d-grid">
                                <Button type="submit" variant="primary" size="md" className="w-75 mx-auto mt-4">
                                    { user.loading ? "Submitting ..." : "Submit" }
                                </Button>
                                <Link to={`/register`} className="mb-3">
                                    <Button variant="outline-secondary" size="md" className="w-75 mx-auto mt-1" >
                                        Sign Up
                                    </Button>
                                </Link>
                            </Container>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}

export default LoginPage;