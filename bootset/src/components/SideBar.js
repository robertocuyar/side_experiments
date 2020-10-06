import React from 'react';
import SideBarItem from "./SideBarItem";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

const SideBar = () => {
    return (
        <Row>
            <Col>
            <SideBarItem sidePiece = "Navigation Bar" />
                <SideBarItem sidePiece = "Jumbotron" />
                <SideBarItem sidePiece = "Body Component" />
                <SideBarItem sidePiece = "Card" />
                <SideBarItem sidePiece = "Footer" />
                <SideBarItem sidePiece = "Settings" />
            </Col>
        </Row>

    )
};

export default SideBar;