import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';


const SideBarItem = prop => {
    return (
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">{prop.sidePiece}</Nav.Link>
                        </Nav.Item>
                    </Nav>
    )
}

export default SideBarItem;