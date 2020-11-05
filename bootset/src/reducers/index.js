import React from 'react';
import {combineReducers} from "redux";
import {NavBarSimple} from "../references/navbars";



const toolsReducer = () => {
    return [
        {
            piece: "Navigation Bar",
            connect: "navigation",
            structure: ['Nav Bar Simple', 'Nav Bar Logo']
        },
        {
            piece: "Jumbotron",
            connect: "jumbo",
            structure: ['Jumbotron']
        },
        {
            piece: "Body Component",
            connect: "divider",
            structure: ['Component']
        },
        {
            piece: "Card",
            connect: "card-item",
            structure: ['Card']
        },
        {
            piece: "Footer",
            connect: "footer",
            structure: ['Footer']
        },
        {
            piece: "Settings",
            connect: "settings",
            structure: ['Settings']
        }
    ]
}

const selectedToolReducer = (selectedTool = null, action) => {
    if (action.type === 'TOOL_SELECTED') {
        return action.payload;
    }
    return selectedTool;
}

const toolChangeReducer = () => {
    return [
        {
            structure: NavBarSimple,
            piece: "Navbar Simple"
        }
    ]
}

const selectedDisplayChange = (selectedChange = null, action) => {
    if (action.type === 'TOOL_CHANGE_SELECTED') {
        return action.payload
    }
    return selectedChange;
}

export default combineReducers({
    tools: toolsReducer,
    selectedTool: selectedToolReducer,
    changeTools: toolChangeReducer,
    selectedChange: selectedDisplayChange
})