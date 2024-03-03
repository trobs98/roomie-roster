import React from "react";
import ProfileImageCoursel from "./ProfileImageCarousel";
import { Container, Row, Col } from "react-bootstrap";

const UserProfile = ({ match }) => {
    //const { userId } = match.params;

    //console.log('User ID: ', userId);

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <h1>John Cena Profile</h1>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col xs="auto" className="mx-auto">
                    <ProfileImageCoursel imagesIds={[]}/>
                </Col>
            </Row>
        </Container>
    )
};

export default UserProfile;