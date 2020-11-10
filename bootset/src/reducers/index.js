
import {combineReducers} from "redux";
import {NavBarSimple, NavBarLogo, NavBarSearch} from "../references/navbars";
import {simpleJumbo, fluidJumbo} from "../references/jumbotron";
import {formControls, simpleForm} from "../references/forms";
import {listBasic, listTabbed} from "../references/lists";

//Cards need to be added on


const toolsReducer = () => {
    return [
        {
            piece: "Navigation Bar",
            connect: "navigation",
            structure: [
                {text: 'Nav Bar Simple', id: 'navSimple', change: NavBarSimple("grey")},
                {text: 'Nav Bar Logo', id: 'navLogo', change: NavBarLogo()},
                {text: 'Nav Bar Search', id: 'navSearch', change: NavBarSearch()}
            ]
        },
        {
            piece: "Jumbotron",
            connect: "jumbo",
            structure: [{text: 'Jumbotron', id: 'jumbo', change: simpleJumbo()}, {text: 'Fluid Jumbo', id: 'jumboFluid', change: fluidJumbo()}]
        },
        {
            piece: "Forms",
            connect: "form",
            structure: [{text: 'Forms', id:'form', change: simpleForm()}, {text: 'Form Controls', id: 'formControl', change: formControls()}]
        },
        {
            piece: "List Groups",
            connect: "list",
            structure: [{text: 'List', id: 'list', change: listBasic()}, {text: 'Tabbed List', id: 'listTabbed', change: listTabbed()}]
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

const selectedNavDisplayChange = (selectedNavChange = null, action) => {
    if (action.type === 'NAV_CHANGE_SELECTED') {
        return action.payload
    }
    return selectedNavChange;
}
const selectedJumboDisplayChange = (selectedJumboChange = null, action) => {
    if (action.type === 'JUMBO_CHANGE_SELECTED') {
        return action.payload
    }
    return selectedJumboChange;
}
const selectedFormDisplayChange = (selectedFormChange = null, action) => {
    if (action.type === 'FORM_CHANGE_SELECTED') {
        return action.payload
    }
    return selectedFormChange;
}
const selectedListDisplayChange = (selectedListChange = null, action) => {
    if (action.type === 'LIST_CHANGE_SELECTED'){
        return action.payload
    }
    return selectedListChange;
}

export default combineReducers({
    tools: toolsReducer,
    selectedTool: selectedToolReducer,
    selectedNavChange: selectedNavDisplayChange,
    selectedJumboChange: selectedJumboDisplayChange,
    selectedFormChange: selectedFormDisplayChange,
    selectedListChange: selectedListDisplayChange
})

/* let example = x.map((item)=> {
if(Object.keys(item).includes('name)){
return item = {name: 'bye'};}
return item;
});

 */