import React from 'react';

class SearchBar extends React.Component {
    state = { term: "" };
onInputChange = e => {
    e.preventDefault();
    this.setState({term: e.target.value})
};
onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
}
    render(){
        return (
            <div className={"search-bar ui segment"}>
                <form onSubmit={this.onFormSubmit} className={"ui form"}>
                    <div className={"field"}>
                        <label>Search For A Video</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.term}/>
                    </div>
                </form>   
            </div>
        )
    }
}

export default SearchBar;