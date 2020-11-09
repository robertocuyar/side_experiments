import React from 'react';
import {connect} from "react-redux";

const DisplayJumbotron = ({change}) => {
    return (
        <div>{change}</div>
    )
}

const mapStateToProps = state => {
    return {change: state.selectedJumboChange}
};


export default connect(mapStateToProps) (DisplayJumbotron);