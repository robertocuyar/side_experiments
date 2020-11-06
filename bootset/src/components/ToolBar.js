import React from 'react';
import Container from 'react-bootstrap/Container';
import { selectNavChange } from "../actions";

import { connect } from "react-redux";

class ToolBar extends React.Component {
    toolBarDisplayRender() {
        if (this.props.tool === null) {
            return <div>Tool Bar</div>
        }
        const buttonDisplay = this.props.tool.structure.map(button => {
            console.log(this.props)
            return <button onClick={() => this.props.selectNavChange(button.change)}
                           key={button.id}>{button.text}</button>
        })
        return (
            <Container fluid className={'my-3'}>
                <div key={this.props.tool.connect}>{buttonDisplay}</div>
            </Container>
        )
    }
    render() {

        return this.toolBarDisplayRender();
    }
}

const mapStateToProps = state => {
    return {tool: state.selectedTool}
};
export default connect(mapStateToProps, { selectNavChange }) (ToolBar);