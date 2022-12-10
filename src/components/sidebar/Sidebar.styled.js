import styled from 'styled-components'
import SidebarBg from '../../assets/images/sidebar-bg.svg'

export const SidebarContainer = styled.div`
    position: fixed;
	width: 255px;
	height: 100vh;
    background-color: #000;
    color: #fff;
    background-image: url(${SidebarBg});
    overflow: hidden;
    transition: 0.2s ease;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: initial;
            width: 4px;
        }
    &::-webkit-scrollbar-track {
        background: #000;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #FBBA12;
        border-radius: 10px;
    }
    @media (max-width: 726px) {
        display: none;
    }
`

export const SidebarHeader = styled.div`
    background: #0F0F0F;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 20px;
`

export const ProfileImgContainer = styled.div`
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }
`

export const SidebarNavigation = styled.nav`
    margin-top: 30px;
    ul {
		list-style-type: none;
		margin: 0 20px;
		padding: 0;
	}

	li a {
        margin: 20px 0;
		text-decoration: none;
		color: #fff;
        display: flex;
        align-items: center;
	}
    .active {
        color: #FBBA12;
    }
    img {
        margin-right: 15px;
    }
`

export const PlaylistContainer = styled.div`
    padding: 20px;
    header {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        & > div {
            display: flex;
            align-items: center;
            gap: 15px;
        }
    }

    ul {
        list-style-type: none;
		margin: 0;
		padding: 0;
    }
    li{
        margin: 12px 0;
        list-style-position:inside;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
        a{
            text-decoration: none;
            color: #fff;
        }
    }
`