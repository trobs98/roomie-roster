import React from "react";
import ProfileImageCoursel from "./ProfileImageCarousel";
import { Container, Row, Col } from "react-bootstrap";

const ProfilePage = ({name, value}) => {

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

export default ProfilePage;