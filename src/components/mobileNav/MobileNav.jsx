import React from 'react'
import HomeIcon from '../../assets/icons/home-icon.png';
import DiscoverIcon from '../../assets/icons/discover.svg';
import LibraryIcon from '../../assets/icons/cd-icon.svg';
import PlaylistIcon from '../../assets/icons/my-playlists.svg';
import { MobileNavContainer } from './MobileNav.styled'

const MobileNav = () => {
  return (
    <MobileNavContainer>
        <ul>
            <li>
                <img src={HomeIcon} alt="home icon"/>
            </li>
            <li>
                <img src={DiscoverIcon} alt="discover icon"/>
            </li>
            <li>
                <img src={LibraryIcon} alt="home icon"/>
            </li>
            <li>
                <img src={PlaylistIcon} alt="home icon"/>
            </li>
        </ul>
    </MobileNavContainer>
  )
}

export default MobileNav