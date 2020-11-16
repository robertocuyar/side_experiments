import React from 'react';
import ToolBar from "./ToolBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DisplayPage from "./DisplayPage";
import ColorToolBar from "./ColorToolBar";


const MainContent = () => {
    return (
        <Container fluid>
            <Row>
        <ToolBar />
            </Row>
            <Row>
                <ColorToolBar />
            </Row>
            <Row>
                <DisplayPage/>
            </Row>
        </Container>
    )
}

export default MainContent;