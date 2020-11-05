import React from 'react';
import Nav from 'react-bootstrap/Nav';


const SideBarItem = prop => {
    return (
        <Nav variant="pills" className="flex-column">
            <div>
                <a>{prop.sidePiece}</a>
            </div>
        </Nav>
    )
}

export default SideBarItem;