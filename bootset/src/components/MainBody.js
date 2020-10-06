import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const MainBody = ()=>{
return (
    <Container fluid>
        <Row>
            <Col className={"nav_side"} xs={2}>
                <SideBar />
            </Col>
            <Col>
                <MainContent />
            </Col>
        </Row>
    </Container>
)
}

export default MainBody;