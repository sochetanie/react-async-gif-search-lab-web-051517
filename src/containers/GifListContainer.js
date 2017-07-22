import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    }
  }

  fetchGifs = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerms}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.json())
      .then(gifs => this.setState({gifs: gifs.data.slice(0,3)})
        )
  }

  render() {
    return (
        <div className='gif-list'>
          <GifList gifts={this.state.gifs}/>
          <GifSearch onSearch={this.fetchGifs}/>
        </div>
      )
  }

}