import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    gap: 80px;
    .profile-img {
        display: none;
    }
    @media (max-width: 726px) {
        .profile-img {
            display: initial;
        }
        .search {
            display: none;
        }
    }
`

export const ArrowNavigationContainer = styled.div`
    display: flex;
    gap: 10px;
    & > div {
        padding: 5px 20px;
        background: #0F0F0F;
    }
    img {
        width: 15px;
    }
    @media (max-width: 726px) {
        display: none;
    }
`

