import React, { Component } from 'react';
import './App.css';
import Search from './search/search'
import Filters from './filters/filters'
import List from './list/list'
import BookTypeFilter from './bookTypeFilter/bookTypeFilter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      searchTerm: "",
      results: [],
      printTypeFilter: "all",
      bookTypeFilter: "none"
    }
  }

  showFilter(show) {
    this.setState({
      showFilter: show
    })
  }

  showList(show) {
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
    const url = this.state.bookTypeFilter === "none"
    ? "https://www.googleapis.com/books/v1/volumes?q=" + formattedSearchTerm + "&printType=" + this.state.printTypeFilter
    : "https://www.googleapis.com/books/v1/volumes?q=" + formattedSearchTerm + "&printType=" + this.state.printTypeFilter + "&filter=" + this.state.bookTypeFilter;

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
      });
      this.showList(true)
    })
    .catch(err => {
      this.setState({
        error: err.message
      })
    })

  }

  setPrintTypeFilter(printType) {
    this.setState({
      printTypeFilter: printType
    })
  }

  setBookTypeFilter(bookType){
    this.setState({
      bookTypeFilter: bookType
    })
  }

  render(){
    const error = this.state.error
      ? <div className="error">{this.state.error}</div>
      : "";
    const list = this.state.showList
      ? <List items={this.state.results}/>
      :"";

    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <Search 
        state={this.state}
        setSearchTerm={searchTerm => this.setSearchTerm(searchTerm)}
        showFilter={show => this.showFilter(show)}
        showList={show => this.showList(show)}
        handleSearch={e => this.handleSearch(e)}/>
        {error}
        <Filters
        setPrintTypeFilter={printType => this.setPrintTypeFilter(printType)}
        setBookTypeFilter={bookType => this.setBookTypeFilter(bookType)}/>
        {list}
      </div>
    )
  }
}

export default App;
