import React from 'react';
import Container from 'react-bootstrap/Container';
import { selectNavChange, selectJumboChange, selectFormChange, selectListChange } from "../actions";

import { connect } from "react-redux";

class ToolBar extends React.Component {

    toolBarDisplayRender() {
        if (this.props.tool === null) {
            return <div>Tool Bar</div>
        }
        const buttonDisplay = this.props.tool.structure.map(button => {
            if (button.id.includes('nav')) {
                return <button onClick={() => this.props.selectNavChange(button.change(this.props.color))}
                               key={button.id}>{button.text}</button>
            }
            if (button.id.includes('jumbo')){
                return <button onClick={() => this.props.selectJumboChange(button.change())}
                               key={button.id}>{button.text}</button>
            }
            if (button.id.includes('form')){
                return <button onClick={()=> this.props.selectFormChange(button.change())}
                               key={button.id}>{button.text}</button>
            }
            if (button.id.includes('list')){
                return <button onClick={()=> this.props.selectListChange(button.change())}
                               key={button.id}>{button.text}</button>
            } return null;
        })
            return (
                <Container fluid className={'my-3'}>
                    <div key={this.props.tool.connect}>
                        {buttonDisplay}
                    </div>
                </Container>
            )

    }
    render() {

        return this.toolBarDisplayRender();
    }
}

const mapStateToProps = state => {
    return {tool: state.selectedTool,
    color: state.selectedNavColor}
};
export default connect(mapStateToProps, { selectNavChange, selectJumboChange, selectFormChange, selectListChange }) (ToolBar);