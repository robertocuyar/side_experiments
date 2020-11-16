import {connect} from "react-redux";
import {simpleForm, formControls} from "../references/forms";

const DisplayForm = ({change, color}) => {
    switch (change){
        case null:
            return null;
        case "form":
            return simpleForm(color)[0];
        case "formControl":
            return formControls(color)[0];
        default:
            return null;

    }
}

const mapStateToProps = state => {
    return {
        change: state.selectedFormChange,
    color: state.selectedFormColor
    }
};


export default connect(mapStateToProps) (DisplayForm);