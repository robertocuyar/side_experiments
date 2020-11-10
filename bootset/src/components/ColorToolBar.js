import React from 'react';
import { connect } from "react-redux";
import {selectNavChange} from "../actions";


class ColorToolBar extends React.Component {
   toolBarDisplayRender () {
       if (this.props.change === null) {
           return <div>COLOR TOOL BAR</div>
       }
           return (<div>
                   <h2>Input Color</h2>
                   {/*<input type="text" onClick={() => this.props.selectNavChange(this.props.change('blue'))}/>*/}
               </div>
           )

   }
   render(){
       return this.toolBarDisplayRender();
   }
}





const mapStateToProps = state => {
    return {change: state.selectedNavChange}
};


export default connect(mapStateToProps, { selectNavChange}) (ColorToolBar);