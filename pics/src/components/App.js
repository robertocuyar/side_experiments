import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    onSearchSubmit(term){
        axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID Zge1vYa0weZcZ4TS9Sl2J7YVI5EnhusLTQoOXz3_ZSE'
            }
        });
    }
render() {
    return(
        <div className={"ui container"} style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
    )
        }


}

export default App;