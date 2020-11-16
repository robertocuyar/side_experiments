import React from 'react';
import { connect } from "react-redux";
import {inputNavColor, inputJumboColor, inputFormColor, inputListColor, inputBodyColor} from "../actions";


class ColorToolBar extends React.Component {
   toolBarDisplayRender () {
       if (this.props.changeNav === null && this.props.changeJumbo === null && this.props.changeForm === null && this.props.changeList === null) {
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
                   <label>List Color Change</label>
                   <input type="text" onChange={(e) => this.props.inputListColor(e.target.value)}/>
                   <label>Body Color Change</label>
                   <input type="text" onChange={(e) => this.props.inputBodyColor(e.target.value)}/>
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
        changeForm: state.selectedFormChange,
        changeList: state.selectedListChange

    }
};


export default connect(mapStateToProps, { inputNavColor, inputJumboColor, inputFormColor, inputListColor, inputBodyColor}) (ColorToolBar);