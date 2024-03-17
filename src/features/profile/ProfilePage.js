import React from "react";
import ProfileImageCoursel from "./ProfileImageCarousel";
import { Container, Row, Col } from "react-bootstrap";

const ProfilePage = () => {

    return (
        <Container fluid>
            <Row className="align-items-center">
                <Col xs="auto" className="mx-auto">
                    <ProfileImageCoursel imagesIds={[]}/>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col className="text-center">
                    <h1>John Cena</h1>
                </Col>
            </Row>
        </Container>
    )
};

export default ProfilePage;