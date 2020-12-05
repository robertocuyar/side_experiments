import React from 'react';
import Container from 'react-bootstrap/Container'

class EventTest extends React.Component {
state = {color: 'blue', index: 0 }

    renderRectangle (){
    const listColors = ['blue', 'red', 'green', 'grey'];
        return (
            <div style={{backgroundColor: listColors[this.state.index], padding : "100px"}}>
            <p>This is our test.</p>
        </div>
        )
    }

   changeColor () {

    if(this.state.index === 3){
        this.setState({index: 0})
    } else {
        let number = this.state.index;
        number++;
       this.setState({index: number});
    }

    }

    renderRedButton () {
        return (
            <div className={'my-3'}>
                <button onClick = { () => this.changeColor() } type={'button'}>Change Color</button>
            </div>
        )
    }

    render(){
        return (
            <Container>
                {this.renderRectangle()}
                {this.renderRedButton()}
            </Container>
        )
    }

}

export default EventTest;