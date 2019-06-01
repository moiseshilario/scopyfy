import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => {
  const handle = () => {};

  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <a href="">Browse</a>
          </li>
          <li>
            <a href="">Radio</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>Your Library</span>
          </li>
          <li>
            <a href="">Your Daily Mix</a>
          </li>
          <li>
            <a href="">Played Recently</a>
          </li>
          <li>
            <a href="">Songs</a>
          </li>
          <li>
            <a href="">Albuns</a>
          </li>
          <li>
            <a href="">Artists</a>
          </li>
          <li>
            <a href="">Stations</a>
          </li>
          <li>
            <a href="">Videos</a>
          </li>
          <li>
            <a href="">Podcasts</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>Playlists</span>
          </li>
          <li>
            <a href="">Best of Rock</a>
          </li>
        </Nav>
      </div>
      <NewPlaylist>
        <img src={AddPlaylistIcon} alt="Add a playlist" />
        <span>New Playlist</span>
      </NewPlaylist>
    </Container>
  );
};

export default Sidebar;
