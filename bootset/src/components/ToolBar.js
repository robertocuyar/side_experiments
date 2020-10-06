import React from 'react';
import Container from 'react-bootstrap/Container';
import ToolBarItem from "./ToolBarItem";

const ToolBar = () => {
    return (
        <Container fluid className={'my-3'}>
          <ToolBarItem />
        </Container>
    )
}

export default ToolBar;