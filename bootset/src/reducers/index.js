import {combineReducers} from "redux";


//Cards need to be added on


const toolsReducer = () => {
    return [
        {
            piece: "Navigation Bar",
            connect: "navigation",
            structure: [
                {text: 'Nav Bar Simple', id: 'navSimple'},
                {text: 'Nav Bar Logo', id: 'navLogo'},
                {text: 'Nav Bar Search', id: 'navSearch'},
                {text: 'Clear Nav Bar', id: 'navClear'}
            ]
        },
        {
            piece: "Jumbotron",
            connect: "jumbo",
            structure: [
                {text: 'Jumbotron', id: 'jumbo'},
                {text: 'Fluid Jumbotron', id: 'jumboFluid'},
                {text: 'Clear Jumbotron', id: 'jumboClear'}
                ]
        },
        {
            piece: "Forms",
            connect: "form",
            structure: [
                {text: 'Forms', id:'form'},
                {text: 'Form Controls', id: 'formControl'},
                {text: 'Clear Form', id: 'formClear'}
            ]
        },
        {
            piece: "List Groups",
            connect: "list",
            structure: [
                {text: 'List', id: 'list'},
                {text: 'Tabbed List', id: 'listTabbed'},
                {text: 'Clear List', id: 'listClear'}
            ]
        },
        {
            piece: "Footer",
            connect: "footer",
            structure: [{text: 'Footer', id: 'footer'}]
        },
        {
            piece: "Settings",
            connect: "settings",
            structure: [{text: 'Nav Bar Color', id: 'settings'}]
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
        return action.payload;
    }
    return selectedNavChange;
}
const selectedNavDisplayColor = (selectedNavColor = 'grey', action) => {
    if(action.type === 'NAV_COLOR_CHANGE') {
        return action.payload;
    }
    return selectedNavColor;
}
const selectedJumboDisplayChange = (selectedJumboChange = null, action) => {
    if (action.type === 'JUMBO_CHANGE_SELECTED') {
        return action.payload;
    }
    return selectedJumboChange;
}
const selectedJumboDisplayColor = (selectedJumboColor = 'lightgrey', action) => {
    if(action.type === 'JUMBO_COLOR_CHANGE') {
        return action.payload;
    }
    return selectedJumboColor;
}
const selectedFormDisplayChange = (selectedFormChange = null, action) => {
    if (action.type === 'FORM_CHANGE_SELECTED') {
        return action.payload;
    }
    return selectedFormChange;
}
const selectedFormDisplayColor = (selectedFormColor = 'lightgrey', action) => {
    if(action.type === 'FORM_COLOR_CHANGE'){
        return action.payload;
    }
    return selectedFormColor;
}
const selectedListDisplayChange = (selectedListChange = null, action) => {
    if (action.type === 'LIST_CHANGE_SELECTED'){
        return action.payload;
    }
    return selectedListChange;
}
const selectedListDisplayColor = (selectedListColor = 'lightgrey', action) => {
    if(action.type === 'LIST_COLOR_CHANGE'){
        return action.payload;
    }
    return selectedListColor;
}
const selectedBodyDisplayColor = (selectedBodyColor = 'white', action)=> {
    if(action.type === 'BODY_COLOR_CHANGE'){
        return action.payload;
    }
    return selectedBodyColor;
}



export default combineReducers({
    tools: toolsReducer,
    selectedTool: selectedToolReducer,
    selectedNavChange: selectedNavDisplayChange,
    selectedJumboChange: selectedJumboDisplayChange,
    selectedFormChange: selectedFormDisplayChange,
    selectedListChange: selectedListDisplayChange,
    selectedNavColor: selectedNavDisplayColor,
    selectedJumboColor: selectedJumboDisplayColor,
    selectedFormColor: selectedFormDisplayColor,
    selectedListColor: selectedListDisplayColor,
    selectedBodyColor: selectedBodyDisplayColor
})

/* let example = x.map((item)=> {
if(Object.keys(item).includes('name)){
return item = {name: 'bye'};}
return item;
});

 */