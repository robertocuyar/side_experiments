import React from 'react';
import { combineReducers} from "redux";


const toolsReducer = () => {
    return [
        {structure: <button>Navbar</button>}
    ]
}
const selectedToolReducer = (navbarSelect = null, action) =>{
 if(action.type === 'NAVBAR_SELECTED'){
     return action.payload;
 }
 return navbarSelect;
}

export default combineReducers ( {
    tools: toolsReducer,
    selectedTool: selectedToolReducer
})