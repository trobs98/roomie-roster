import React from "react";
import { useDispatch } from "react-redux";
import { Container, Button, Form } from "react-bootstrap";

const LoginPage = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="loginFormEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Login with your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginFormPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Button variant="Primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default LoginPage;