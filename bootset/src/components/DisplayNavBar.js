import React from 'react';
import { connect } from "react-redux";


const DisplayNavBar = ({change}) => {


        return (
            <div>{change}</div>
        )

}
const mapStateToProps = state => {
    return {change: state.selectedNavChange}
};



export default connect(mapStateToProps) (DisplayNavBar);