import React from 'react';
import SideBarItem from "./SideBarItem";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

const SideBar = () => {
    return (
        <Row className={"my-2"}>
            <Col>
            <SideBarItem sidePiece = "Navigation Bar" idConnect= "navigation" />
                <SideBarItem sidePiece = "Jumbotron" idConnect= "jumbo" />
                <SideBarItem sidePiece = "Body Component" idConnect= "divider" />
                <SideBarItem sidePiece = "Card" idConnect= "card-item"/>
                <SideBarItem sidePiece = "Footer" idConnect= "footer"/>
                <SideBarItem sidePiece = "Settings" />
            </Col>
        </Row>

    )
};

export default SideBar;