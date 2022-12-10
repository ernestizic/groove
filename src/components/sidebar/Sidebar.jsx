import React from 'react';
import { NavLink } from 'react-router-dom';
import { userPlaylists } from '../../data';

import HomeIcon from '../../assets/icons/home-icon.png';
import DiscoverIcon from '../../assets/icons/discover.svg';
import LibraryIcon from '../../assets/icons/cd-icon.svg';
import LikeIcon from '../../assets/icons/love-icon.svg';
import RecentPlayIcon from '../../assets/icons/recently-played.svg';
import CreatePlaylistIcon from '../../assets/icons/create-playlist.svg';
import SpeakerIcon from '../../assets/icons/speaker.svg';
import PlaylistIcon from '../../assets/icons/my-playlists.svg';
import SearchIcon from '../../assets/icons/search-icon.svg';
import ProfileImg from '../../assets/images/user.png';
import {
    PlaylistContainer,
	ProfileImgContainer,
	SidebarContainer,
	SidebarHeader,
	SidebarNavigation,
} from './Sidebar.styled';

const Sidebar = () => {
	return (
		<SidebarContainer>
			<SidebarHeader>
				<ProfileImgContainer>
					<img src={ProfileImg} alt='profile' />
				</ProfileImgContainer>
				<p>Hey Aleem!</p>
			</SidebarHeader>

			<SidebarNavigation>
				<ul>
					<li>
						<NavLink to='/'>
							<img src={HomeIcon} alt='Home icon' />
							Home
						</NavLink>
					</li>

					<li>
						<NavLink to='/discover'>
							<img src={DiscoverIcon} alt='discover icon' />
							Discover
						</NavLink>
					</li>
                    <hr />

					<li>
						<NavLink to='/your_library'>
							<img src={LibraryIcon} alt='library icon' />
							Your Library
						</NavLink>
					</li>

					<li>
						<NavLink to='/liked_songs'>
							<img src={LikeIcon} alt='like icon' />
							Liked Songs <img src={SpeakerIcon} alt='speaker' style={{marginLeft: '10px'}}/>
						</NavLink>
					</li>
					<li>
						<NavLink to='/recently_played'>
							<img src={RecentPlayIcon} alt='recently played icon' />
							Recently Played
						</NavLink>
					</li>

					<li>
						<a href='/create_playlist'>
							<img src={CreatePlaylistIcon} alt='ceate playlist icon' />
							Create Playlist
						</a>
					</li>
				</ul>
			</SidebarNavigation>

            <PlaylistContainer>
                <header>
                    <div>
                        <img src={PlaylistIcon} alt='playlist'/>
                        <p>My Playlists</p>
                    </div>
                    <img src={SearchIcon} alt="search"/>
                </header>
                <hr />

                <ul>
                    {userPlaylists?.map(playlist => (
                        <li key={playlist.id}>
                            <NavLink to="##">
                                {playlist.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </PlaylistContainer>
		</SidebarContainer>
	);
};

export default Sidebar;
