import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const simpleJumbo = color => {
    return [
        <Jumbotron className={'mb-3'} key={"basicJumbo"} style={{backgroundColor : color}}>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    ]
}

export const fluidJumbo = color => {
    return [
        <Jumbotron className={'mb-3'} key={"fluidJumbo"} style={{backgroundColor : color}} fluid>
            <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
            </Container>
        </Jumbotron>
    ]
}