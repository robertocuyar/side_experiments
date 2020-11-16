import React from 'react';
import DisplayNavBar from "./DisplayNavBar";
import DisplayJumbotron from "./DisplayJumbotron";
import DisplayForm from "./DisplayForm";
import DisplayList from "./DisplayList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

const DisplayPage =  ({color}) => {
    return (
        <Container className={'px-0'} style={{backgroundColor: color}}>
            <Row>
                <Col>
            <DisplayNavBar />
                </Col>
            </Row>
            <Row>
                <Col>
            <DisplayJumbotron />
                </Col>
            </Row>
            <Row>
                <Col>
            <DisplayForm />
                </Col>
            </Row>
            <Row>
                <Col>
                    <DisplayList />
                </Col>
            </Row>
        </Container>

    )
}
const mapStateToProps = state => {
    return {
        color: state.selectedBodyColor
    }
}

export default connect(mapStateToProps)(DisplayPage);