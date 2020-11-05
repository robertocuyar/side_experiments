import React from 'react';
import Container from 'react-bootstrap/Container';

import { connect } from "react-redux";


const ToolBar = ({tool}) =>{

    if(tool === null){
        return <div>Tool Bar</div>
    }

        return(
        <Container fluid className={'my-3'}>
            <div>{tool.structure}</div>
        </Container>
        )
    }

const mapStateToProps = state => {
    return {tool: state.selectedTool}
};
export default connect(mapStateToProps) (ToolBar);