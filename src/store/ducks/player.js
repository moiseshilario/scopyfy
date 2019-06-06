import Sound from 'react-sound';

/**
 * Action Types
 */
export const Types = {
  LOAD: 'player/LOAD',
};

/**
 * Action Creators
 */

export const Creators = {
  loadSong: song => ({
    type: Types.LOAD,
    payload: { song },
  }),
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING,
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return { ...state, currentSong: action.payload.song, status: Sound.status.PLAYING };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}
