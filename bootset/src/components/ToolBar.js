import React from 'react';
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";


const ToolBar = () => {
    return (
        <Col>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    Hello
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    Bye
                </Tab.Pane>
            </Tab.Content>
        </Col>
    )
}

export default ToolBar;