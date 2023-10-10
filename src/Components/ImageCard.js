import React from 'react'

const ImageCard = (props) => {
  return (
    <div className='img-card'>
      <h2>{props.name}</h2>
      <img className='imagecard' src={props.src} />
      <p>Rank: {props.rank}</p>
      <h4>Price in $: {props.price}</h4>
      <h6>MarketCap :{props.cap}</h6>
      <div className='img-links'>
        <a href={props.twitter}><i class="fa-brands fa-twitter fa-lg"></i></a>
        <a href={props.website}><i class="fa-solid fa-globe fa-lg"></i></a>
        <a href='https://github.com/sasilagisetti'><i class="fa-brands fa-github fa-lg"></i></a>
      </div>
    </div>
  )
}

export default ImageCard
