import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getProfile } from '../features/profile/profileSlice';

const NavigationBar = () => {
    //const user = useSelector(getProfile);

    return (
        <nav>
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs="auto" className="ml-auto">
                        <Link to="/"><FontAwesomeIcon icon={faHouse} size="2xl" /></Link>
                    </Col>
                    <Col className="text-center">
                        <h2>Roomie Roster</h2>
                    </Col>
                    <Col xs="auto" className="ml-auto">
                        <Link to="/messages"><FontAwesomeIcon icon={faMessage} size="2xl" /></Link>
                    </Col>
                    <Col xs="auto" className="ml-auto">
                        {/* <Link to={`/profile/${user.id}`}><FontAwesomeIcon icon={faUser} size="2xl" /></Link> */}
                        <Link to={`/profile`}><FontAwesomeIcon icon={faUser} size="2xl" /></Link>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}


export default NavigationBar;