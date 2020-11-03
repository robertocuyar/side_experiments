import React, {Component} from 'react';
import SideBarItem from "./SideBarItem";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import {useDispatch} from "react-redux";

const sideItems = [
    {
        piece: "Navigation Bar",
        connect: "navigation"
    },
    {
        piece: "Jumbotron",
        connect: "jumbo"
    },
    {
        piece: "Body Component",
        connect: "divider"
    },
    {
        piece: "Card",
        connect: "card-item"
    },
    {
        piece: "Footer",
        connect: "footer"
    },
    {
        piece: "Settings",
        connect: "settings"
    }

]
// const dispatch = useDispatch();
const SideBar = () => {

    const sideBarItemDisplay = sideItems.map(({piece, connect})=>{
        return <SideBarItem sidePiece = {piece} idConnect={connect} /*onClick={()=> this.props.navbarSelect(piece)}*/ />
    })
    return (
        <Row className={"my-2"}>
            <Col>
                {sideBarItemDisplay}
            </Col>
        </Row>

    )
};

export default SideBar;