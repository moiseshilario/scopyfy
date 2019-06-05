import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import Loading from '../../components/Loading';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = ({ playlists, loading, getPlaylistRequest }) => {
  const loadPlaylists = async () => {
    await getPlaylistRequest();
  };

  useEffect(() => {
    loadPlaylists();
  }, []);

  return (
    <Container>
      <Title>
        Browse
        {loading && <Loading />}
      </Title>

      <List>
        {playlists.map(playlist => (
          <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
            <img src={playlist.thumbnail} alt={playlist.title} />
            <strong>{playlist.title}</strong>
            <p>{playlist.description}</p>
          </Playlist>
        ))}
      </List>
    </Container>
  );
};

Browse.propTypes = {
  getPlaylistRequest: PropTypes.func.isRequired,
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      description: PropTypes.string,
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
)(Browse);
