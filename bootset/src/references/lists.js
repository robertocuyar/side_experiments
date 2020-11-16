import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container"


export const listBasic = color => {
    return [
        <Container style={{backgroundColor: color}} key={"listGroup"}>
        <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    </Container>
    ]
}

export const listTabbed = color => {
    return [
        <Tab.Container style={{backgroundColor: color}} id="list-group-tabs-example" defaultActiveKey="#link1" key={"listTabbed"}>
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                            Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Link 2
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            Then let not winter's ragged hand deface, In thee thy summer, ere thou be distill'd: Make sweet some vial; treasure thou some place With beauty's treasure ere it be self-kill'd. That use is not forbidden usury, Which happies those that pay the willing loan; That's for thy self to breed another thee, Or ten times happier, be it ten for one; Ten times thy self were happier than thou art, If ten of thine ten times refigur'd thee:
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            Thy gift, thy tables, are within my brain Full character'd with lasting memory, Which shall above that idle rank remain, Beyond all date; even to eternity: Or, at the least, so long as brain and heart Have faculty by nature to subsist; Till each to raz'd oblivion yield his part Of thee, thy record never can be miss'd. That poor retention could not so much hold, Nor need I tallies thy dear love to score;
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    ]
}