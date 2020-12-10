import React from 'react';
import Card from './Card'

const App = () => {
    return (
        <div>
            <Card/>
            <form className={'mx-3'} action="/edit/list" method={'Post'}>
                <label htmlFor="">Type your name</label>
                <input type="text"/>
            </form>

        </div>
    )
}

export default App;

