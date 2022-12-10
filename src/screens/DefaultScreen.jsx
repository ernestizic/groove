import React from 'react'
import Banner from '../assets/images/banner.png'
import { playlists } from '../data'
import { AlbumContainer, DefaultScreenContainer } from './DefaultScreen.styled'

const DefaultScreen = () => {
  return (
    <DefaultScreenContainer>
      <div className='banner'>
        <img src={Banner} alt="banner" />
      </div>

      <h2>Welcome Back!</h2>

      <div className='playlists'>
        {playlists?.map(playlist => (
          <AlbumContainer>
            {playlist.cover}
            <div className='album-content'>
              <h3>{playlist.title}</h3>
              <p>{playlist.Artistes}</p>
            </div>
          </AlbumContainer>
        ))}
      </div>


      <h2>Cheers to the Weekend</h2>

      <div className='playlists'>
        {playlists?.map(playlist => (
          <AlbumContainer>
            {playlist.cover}
            <div className='album-content'>
              <h3>{playlist.title}</h3>
              <p>{playlist.Artistes}</p>
            </div>
          </AlbumContainer>
        ))}
      </div>

    </DefaultScreenContainer>
  )
}

export default DefaultScreen