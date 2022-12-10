import React from 'react'
import ArrowLeft from '../../assets/icons/arrow-left.png'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import SearchIcon from '../../assets/icons/search-icon.svg';
import ProfileImg from '../../assets/images/user.png';
import { ArrowNavigationContainer, HeaderContainer } from './Header.styled'

const Header = () => {
  return (
    <HeaderContainer>
        <img src={ProfileImg} alt='profile' className='profile-img' />
        <ArrowNavigationContainer>
            <div>
                <img src={ArrowLeft} alt='left arrow icon' />
            </div>
            <div>
                <img src={ArrowRight} alt='right arrow icon' />
            </div>
        </ArrowNavigationContainer>
        <img src={SearchIcon} alt="search" className='search'/>
    </HeaderContainer>
  )
}

export default Header