import React from 'react';
import './search.css'

class Search extends React.Component {

    render(){
        return (
            <form className="search__form" onSubmit={e => this.props.handleSearch(e)}>
                <label htmlFor="search">Search:</label>
                <input
                type="text"
                name="search"
                id="search"
                placeholder="Search an author or title"
                value={this.props.state.searchTerm}
                onChange={e => this.props.setSearchTerm(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default Search