import React from 'react';
import { connect } from "react-redux";
import {inputNavColor, inputJumboColor, inputFormColor} from "../actions";


class ColorToolBar extends React.Component {
   toolBarDisplayRender () {
       if (this.props.changeNav === null && this.props.changeJumbo === null && this.props.changeForm === null) {
           return <div>COLOR TOOL BAR</div>
       }
           return (
               <div>
                   <label>Nav Bar Color Change</label>
                   <input type="text" onChange={(e)=> this.props.inputNavColor(e.target.value)}/>
                   <br/>
                   <label>Jumbotron Color Change</label>
                   <input type="text" onChange={(e)=> this.props.inputJumboColor(e.target.value)}/>
                   <label>Form Color Change</label>
                   <input type="text" onChange={(e)=> this.props.inputFormColor(e.target.value)}/>
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
    changeJumbo: state.selectedJumboChange,
        changeForm: state.selectedFormChange

    }
};


export default connect(mapStateToProps, { inputNavColor, inputJumboColor, inputFormColor}) (ColorToolBar);