import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';

import Loading from '../Loading';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = ({ playlists, getPlaylistRequest, loading }) => {
  useEffect(() => {
    const loadPlaylists = async () => {
      await getPlaylistRequest();
    };

    loadPlaylists();
  }, [getPlaylistRequest]);

  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <Link to="/">Browse</Link>
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
            {loading && <Loading />}
          </li>
          {playlists.map(playlist => (
            <li key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
            </li>
          ))}
        </Nav>
      </div>
      <NewPlaylist>
        <img src={AddPlaylistIcon} alt="Add a playlist" />
        <span>New Playlist</span>
      </NewPlaylist>
    </Container>
  );
};

Sidebar.propTypes = {
  getPlaylistRequest: PropTypes.func.isRequired,
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  playlists: state.playlists.data,
  loading: state.playlists.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
