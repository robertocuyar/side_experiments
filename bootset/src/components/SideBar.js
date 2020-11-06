import React, {Component} from 'react';
import SideBarItem from "./SideBarItem";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { selectTool } from '../actions';


class SideBar extends Component {
    render() {
        const sideBarItemDisplay = this.props.tools.map( tool => {
            return (
            //     <SideBarItem sidePiece={tool.piece}
            //                     onClick={()=>this.props.selectTool(tool)}
            //                     key={tool.connect}
            // />
                <div key={tool.connect}>
                    <div onClick={()=>this.props.selectTool(tool)}>{tool.piece}</div>
                </div>
            )
        })
        return (
            <Row className={"my-2"}>
                <Col>
                    {sideBarItemDisplay}
                </Col>
            </Row>

        )
    }
};
const mapStateToProps = state => {
    return { tools: state.tools }
};

export default connect(mapStateToProps, { selectTool }) (SideBar);

