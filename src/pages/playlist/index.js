import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

import { Container, Header, SongList } from './styles';

import Loading from '../../components/Loading';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = ({
  playlist, loading, getPlaylistDetailsRequest, match, loadSong,
}) => {
  useEffect(() => {
    const loadPlaylist = async () => {
      const { id } = match.params;
      await getPlaylistDetailsRequest(id);
    };

    loadPlaylist();
  }, [getPlaylistDetailsRequest, match.params]);

  const renderDetails = () => (
    <Container>
      <Header>
        <img src={playlist.thumbnail} alt={playlist.title} />

        <div>
          <span>PLAYLIST</span>
          <h1>{playlist.title}</h1>
          {!!playlist.songs && <p>{playlist.songs.length} songs</p>}

          <button type="button">PLAY</button>
        </div>
      </Header>

      <SongList cellPading={0} cellSpacing={0}>
        <thead>
          <tr>
            <th />
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>
              <img src={ClockIcon} alt="Duration" />
            </th>
          </tr>
        </thead>

        <tbody>
          {!playlist.songs ? (
            <tr>
              <td colSpan={5}>This playlist has no songs</td>
            </tr>
          ) : (
            playlist.songs.map(song => (
              <tr key={song.id} onDoubleClick={() => loadSong(song)}>
                <td>
                  <img src={PlusIcon} alt="Add song" />
                </td>
                <td>{song.title}</td>
                <td>{song.author}</td>
                <td>{song.album}</td>
                <td>4:49</td>
              </tr>
            ))
          )}
        </tbody>
      </SongList>
    </Container>
  );

  return loading ? (
    <Container loading>
      <Loading />
    </Container>
  ) : (
    renderDetails()
  );
};

Playlist.propTypes = {
  getPlaylistDetailsRequest: PropTypes.func.isRequired,
  playlist: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
  loadSong: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  playlist: state.playlistDetails.data,
  loading: state.playlistDetails.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
