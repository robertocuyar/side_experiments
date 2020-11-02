import { combineReducers} from "redux";
import { navbarSelect } from "../actions";

const selectedToolReducer = (navbarSelect = null, action){
 if(action.type === 'NAVBAR_SELECTED'){
     return action.payload;
 }
 return navbarSelect;
}

export default combineReducers ( {
    selectedToolReducer
})