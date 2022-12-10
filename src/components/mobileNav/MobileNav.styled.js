import styled from 'styled-components'
import SidebarBg from '../../assets/images/min-nav-bg.png'

export const MobileNavContainer = styled.div`
    display: none;
     margin-top: 30px;
     position: fixed;
     bottom: 0;
     width: 100%;
     background: #000;
     background-image: url(${SidebarBg});
     padding: 20px 0;
     @media (max-width: 726px) {
        display: block;
    }
    ul {
		list-style-type: none;
		margin: 0 20px;
		padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 10px;
	}

	li {
		text-decoration: none;
		color: #fff;
	}

`