import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ToolBarItem from "./ToolBarItem";

const ToolBar = props => {
    const [activeTool, setActiveTool] = useState(<h1>Tool Bar</h1>)

    return (
        <Container fluid className={'my-3'}>
          <ToolBarItem show={activeTool} />
        </Container>
    )
}

export default ToolBar;