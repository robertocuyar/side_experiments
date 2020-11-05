import React from 'react';
import Container from 'react-bootstrap/Container';

import { connect } from "react-redux";


const ToolBar = ({tool}) =>{

    if(tool === null){
        return <div>Tool Bar</div>
    }
    const buttonDisplay = tool.structure.map(button =>{
        return <button>{button}</button>
    })
        return(
        <Container fluid className={'my-3'}>
            <div key={tool.connect}>{buttonDisplay}</div>
        </Container>
        )
    }

const mapStateToProps = state => {
    return {tool: state.selectedTool}
};
export default connect(mapStateToProps) (ToolBar);