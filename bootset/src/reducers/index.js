
import {combineReducers} from "redux";
import {NavBarSimple, NavBarLogo} from "../references/navbars";



const toolsReducer = () => {
    return [
        {
            piece: "Navigation Bar",
            connect: "navigation",
            structure: [{text: 'Nav Bar Simple', id: 'navSimple', change: NavBarSimple()}, {text: 'Nav Bar Logo', id: 'navLogo', change: NavBarLogo()}]
        },
        {
            piece: "Jumbotron",
            connect: "jumbo",
            structure: [{text: 'Jumbotron', id: 'jumbo'}]
        },
        {
            piece: "Body Component",
            connect: "divider",
            structure: [{text: 'Component', id:'component'}]
        },
        {
            piece: "Card",
            connect: "card-item",
            structure: [{text: 'Card', id: 'card'}]
        },
        {
            piece: "Footer",
            connect: "footer",
            structure: [{text: 'Footer', id: 'footer'}]
        },
        {
            piece: "Settings",
            connect: "settings",
            structure: [{text: 'Settings', id: 'settings'}]
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

const selectedNavDisplayChange = (selectedNavChange = null, action) => {
    if (action.type === 'NAV_CHANGE_SELECTED') {
        return action.payload
    }
    return selectedNavChange;
}

export default combineReducers({
    tools: toolsReducer,
    selectedTool: selectedToolReducer,
    changeTools: toolChangeReducer,
    selectedNavChange: selectedNavDisplayChange
})