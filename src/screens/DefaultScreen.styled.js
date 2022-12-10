import styled from 'styled-components'

export const DefaultScreenContainer = styled.div`
	margin: 25px 0; 

    .banner {
        img {
            width: 100%;
            height: auto;
        }
    }

    h2 {
        margin: 20px 0;
    }

    .playlists {
        display: flex;
        overflow-x: scroll;
        gap: 20px;
    }
`

export const AlbumContainer = styled.div`
    position: relative;
    img {
        min-width: 100%;
        height: auto;
    }
    .album-content {
        width:100% ;
        position: absolute;
        bottom: 30px;
        padding: 0 18px;
        h3{
            padding-bottom: 5px;
        }
        p{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`