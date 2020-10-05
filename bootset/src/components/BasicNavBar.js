import React from 'react';

const BasicNavBar = ()=>{
    return (
        <nav className={"navbar navbar-light bg-light"}>
        <a className={"navbar-brand"} href={"/"}>
            <img src={"/docs/4.5/assets/brand/bootstrap-solid.svg"} width={"30"} height={"30"} className={"d-inline-block align-top"} alt={"Logo"} loading={"lazy"}/>
            Bootstrap
        </a>
    </nav>
    )
};



export default BasicNavBar;