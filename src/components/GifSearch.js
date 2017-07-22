import React from 'react'

import GifList from '../components/GifList'

export default class GifSearch extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: ''
    }
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    this.props.onSearch(this.state.searchTerm)
  }

  render() {
    return (
      <h3>Enter a Search Term:</h3>
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.searchTerm} onChange={this.handleSearch}/>
        <button type='submit'>Find Gifs</button>
      </form>
      )
  }

}