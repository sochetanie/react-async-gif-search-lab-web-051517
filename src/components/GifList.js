import React from 'react'

const GifList = {props} => {
  return (
      <ul>
        {props.gifs.map(gif => <li> <img src={gif.embed_url}/> </li>)}
      </ul>
    )
}

export defautl GifList