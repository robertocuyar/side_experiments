import React from 'react';
import Nav from 'react-bootstrap/Nav';


const SideBarItem = prop => {
    return (
        <Nav variant="pills" className="flex-column">
            <Nav.Item>
                <Nav.Link id={prop.idConnect}>{prop.sidePiece}</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default SideBarItem;