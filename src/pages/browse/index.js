import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Browse</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0994d841602157.57ac63336b606.jpg"
          alt="Playlist"
        />
        <strong>This is rock</strong>
        <p>Be more productive listening rock music while you code!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0994d841602157.57ac63336b606.jpg"
          alt="Playlist"
        />
        <strong>This is rock</strong>
        <p>Be more productive listening rock music while you code!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0994d841602157.57ac63336b606.jpg"
          alt="Playlist"
        />
        <strong>This is rock</strong>
        <p>Be more productive listening rock music while you code!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0994d841602157.57ac63336b606.jpg"
          alt="Playlist"
        />
        <strong>This is rock</strong>
        <p>Be more productive listening rock music while you code!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
