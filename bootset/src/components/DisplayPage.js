import React from 'react';
import DisplayNavBar from "./DisplayNavBar";
import DisplayJumbotron from "./DisplayJumbotron";
import DisplayForm from "./DisplayForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DisplayPage =  () => {
    return (
        <Container>
            <Row>
                <Col>
            <DisplayNavBar/>
                </Col>
            </Row>
            <Row>
                <Col>
            <DisplayJumbotron/>
                </Col>
            </Row>
            <DisplayForm/>
        </Container>

    )
}

export default DisplayPage;