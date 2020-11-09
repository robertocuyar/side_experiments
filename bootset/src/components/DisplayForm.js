import React from 'react';
import {connect} from "react-redux";

const DisplayForm = ({change}) => {
    return (
        <div>{change}</div>
    )
}

const mapStateToProps = state => {
    return {change: state.selectedFormChange}
};


export default connect(mapStateToProps) (DisplayForm);