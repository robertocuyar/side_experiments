import { connect } from "react-redux";
import {NavBarSimple, NavBarLogo, NavBarSearch} from "../references/navbars";


const DisplayNavBar = ({change, color}) => {
    switch (change){
        case null:
            return null;
        case 'navSimple':
            return NavBarSimple(color)[0];
        case 'navLogo':
            return NavBarLogo(color)[0];
        case 'navSearch':
            return NavBarSearch(color)[0];
        default:
            return null;
    }

}
const mapStateToProps = state => {
    return {
        change: state.selectedNavChange,
        color: state.selectedNavColor
    }
};



export default connect(mapStateToProps) (DisplayNavBar);