import React, { Component } from 'react';
import './App.css';
import Search from './search/search'
import Filters from './filters/filters'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      showList: false,
      searchTerm: "",
      results: []
    }
  }

  setShowFilter(show) {
    this.setState({
      showFilter: show
    })
  }

  setShowList(show) {
    this.setState({
      showList: show
    })
  }

  setSearchTerm(searchTerm) {
    this.setState({
      searchTerm: searchTerm
    })
  }

  handleSearch(e) {
    e.preventDefault();
    const formattedSearchTerm = encodeURIComponent(this.state.searchTerm);
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + formattedSearchTerm;

    fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong. Please try again later.');
      }
      return response;
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        results: data.items
      })
    })
    .catch(err => {
      this.setState({
        error: err.message
      })
    })

  }

  render(){
    const error = this.state.error
      ? <div className="error">{this.state.error}</div>
      : "";
    const filter = this.state.showFilter
      ? <Filters />
      : "";

    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <Search 
        state={this.state}
        setSearchTerm={searchTerm => this.setSearchTerm(searchTerm)}
        setShowFilter={show => this.setShowFilter(show)}
        setShowList={show => this.setShowList(show)}
        handleSearch={e => this.handleSearch(e)}/>
        {error}
        {filter}
      </div>
    )
  }
}

export default App;
