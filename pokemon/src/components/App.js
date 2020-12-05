import React from 'react';
import NavBarIndex from "./NavBarIndex";
import Info from "./Info";
import EventTest from "./EventTest";

const App = props => {
    return (
        <div>
            <NavBarIndex/>
            <h1 className="header title">Hello World</h1>
            <br/>
            <p>This is fun!</p>
            <Info name={"Bulbusaur"} description={"green pokemon"} type={"grass"}/>
            <Info name={"Charmander"} description={"lizard pokemon"} type={"fire"}/>
            <Info name={"Squirtle"} description={"turtle pokemon"} type={"water"}/>
            <EventTest/>
        </div>
    )
}

export default App;