import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export const NavBarSimple = () => {
    return [<Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
            </Navbar.Brand>
        </Navbar>]


};

export const NavBarLogo = () => {
    return [<Navbar bg="dark">
        <Navbar.Brand href="#home">
            <img
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
    </Navbar>]
};