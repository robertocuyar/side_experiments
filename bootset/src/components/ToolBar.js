import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ToolBarItem from "./ToolBarItem";
import { connect } from "react-redux";
import {navbarSelect} from "../actions";

class ToolBar extends Component {
    // const [activeTool, setActiveTool] = useState(<h1>Tool Bar</h1>)

    render() {
        return(
        <Container fluid className={'my-3'}>
          <ToolBarItem show={this.props.tools.structure} />
        </Container>
        )
    }
}
const mapStateToProps = state => {
    return {tools: state.tools}
};
export default connect(mapStateToProps, {navbarSelect}) (ToolBar);