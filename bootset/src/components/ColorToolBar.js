import React from 'react';
import { connect } from "react-redux";
import {inputNavColor, selectNavChange} from "../actions";


class ColorToolBar extends React.Component {
   toolBarDisplayRender () {
       if (this.props.changeNav === null) {
           return <div>COLOR TOOL BAR</div>
       }
           return (
               <div>
                   <label>Nav Bar Color Change</label>
                   <input type="text" onChange={(e)=> this.props.inputNavColor(e.target.value)}/>
               </div>
           )

   }
   render(){
       return this.toolBarDisplayRender();
   }
}





const mapStateToProps = state => {
    return {
        changeNav: state.selectedNavChange,
    changeJumbo: state.selectedJumboChange
    }
};


export default connect(mapStateToProps, { inputNavColor, selectNavChange}) (ColorToolBar);