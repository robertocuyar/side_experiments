import React from 'react';
import Navbar from "react-bootstrap/Navbar";



const NavBarIntro =() =>{
    return(
        <Navbar className={"nav_main"} variant="dark">
            <Navbar.Brand href="#home">
                {' '}
                Bootset
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBarIntro;
