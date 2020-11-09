import React from 'react';
import { connect } from 'react-redux';

const DisplayList = ({change}) => {
    return (
        <div>{change}</div>
    )
}

const mapStateToProps = state => {
    return {change: state.selectedListChange}
};

export default connect(mapStateToProps) (DisplayList)

