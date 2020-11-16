import {connect} from "react-redux";
import { simpleJumbo, fluidJumbo } from "../references/jumbotron";

const DisplayJumbotron = ({change, color}) => {
    switch(change){
        case null:
            return null;
        case "jumbo":
            return simpleJumbo(color);
        case "jumboFluid":
            return fluidJumbo(color);
        default:
            return null;
    }

}

const mapStateToProps = state => {
    return {
        change: state.selectedJumboChange,
        color: state.selectedJumboColor
    }
};


export default connect(mapStateToProps) (DisplayJumbotron);