import React from 'react';
import { combineReducers } from "redux";


const toolsReducer = () => {
    return [
        {
            piece: "Navigation Bar",
            connect: "navigation",
            structure: <button>Navbar</button>
        },
        {
            piece: "Jumbotron",
            connect: "jumbo",
            structure: <button>Jumbotron</button>
        },
        {
            piece: "Body Component",
            connect: "divider",
            structure: <button>Component</button>
        },
        {
            piece: "Card",
            connect: "card-item",
            structure: <button>Card</button>
        },
        {
            piece: "Footer",
            connect: "footer",
            structure: <button>Footer</button>
        },
        {
            piece: "Settings",
            connect: "settings",
            structure: <button>Settings</button>
        }
    ]
}
const selectedToolReducer = (selectedTool = null, action) =>{
 if(action.type === 'TOOL_SELECTED'){
     return action.payload;
 }
 return selectedTool;
}

export default combineReducers ( {
    tools: toolsReducer,
    selectedTool: selectedToolReducer
})