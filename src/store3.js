import { combineReducers, createStore } from 'redux';
import data from './stopify';

/**
 * Songs reducer, initial state comes from the imported JSON file
 * @param {array} state 
 * @param {object} action 
 */
const songsReducer = (state = data, action) => {
  switch(action.type) {
    case 'PLAY_SONG':
      /**
       * Find the target song...
       */
      const targetSong = state.find((song) => song.id === action.payload.id);
      /**
       * ...then spread everything that's not the target song
       * finally add back the target song with the "played" prop incremented
       */
      return [
        ...state.filter((song) => song.id !== action.payload.id),
        {...targetSong, played: targetSong.played + 1}
      ];
    default:
      return state;
  }
};

/**
 * Playlists reducer, starts as an empty array
 * @param {array} state 
 * @param {object} action 
 */
const playlistsReducer = (state = [], action) => {
  switch(action.type) {
    case 'MAKE_PLAYLIST':
      /**
       * Spread the existing playlists, add the new playlist at the end.
       * New playlist name's the name prop passed in the action's payload.
       * New playlist is initialized with an empty "songs" array.
       */
      return [
        ...state,
        { 
          id: Math.random(),
          name: action.payload.name,
          songs: []
        }
      ];
    case 'ADD_SONG_TO_PLAYLIST':
      /**
       * Find the target playlist...
       */
      const targetPlaylist = state.find((playlist) => playlist.id === action.payload.playlistId);
      /**
       * ...then spread everything that's not the target playlist
       * finally add back the target playlist.
       * Spread any song that would already be in the target playlist,
       * then add the new song at the end.
       */
      return [
        ...state.filter((playlist) => playlist.id !== action.payload.playlistId),
        {
          ...targetPlaylist,
          songs: [
            ...targetPlaylist.songs,
            action.payload.song
          ]
        }
      ];
    case 'DELETE_PLAYLIST':
      /**
       * Return everything that's not matching the playlist id
       * passed as prop in the payload object.
       */
      return [...state.filter((playlist) => playlist.id !== action.payload.id)];
    default:
      return state;
    }
};

/**
 * Combining our reducers into a rootReducer
 * ready to be injected in the store.
 */
const rootReducer = combineReducers({
  songs: songsReducer,
  playlists: playlistsReducer
});

/**
 * Creating store.
 */
const Store = createStore(rootReducer);

/**
 * For each global state mutation
 * print the whole state in the console.
 */
Store.subscribe(() => console.log(Store.getState()));

/**
 * Play the song with id: 1
 * 🎵 Halcyon - Elder 🎵
 */
Store.dispatch({ type: 'PLAY_SONG', payload: { id: 1 } });

/**
 * Make a new playlist named "Coolest songs !" - Yea that's right.
 */
Store.dispatch({ type: 'MAKE_PLAYLIST', payload: { name: 'Coolest songs !' }});

/**
 * Trying to get the first playlist's id.
 * "?." syntax is called conditional chaining
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Optional_chaining
 * It's a pretty neat feature added in ES2020
 * At any point in the object call chain, if a prop is undefined, the call
 * will gracefully assign "undefined" to the left operand,
 * and will not break like it does in a normal object call chain.
 */
const playlistId = Store.getState()?.playlists[0]?.id;

/**
 * If we found a playlist id...
 */
if (playlistId) {
  /**
   * Add a new song to the target playlist
   */
  Store.dispatch({
    type: 'ADD_SONG_TO_PLAYLIST',
    payload: {
      playlistId, 
      song: {
        id: Math.random(),
        title: "Born in winter",
        artist: "Gojira",
        played: 0
      }
    }
  })

  /**
   * Then proceed to delete the target playlist
   */
  Store.dispatch({
    type: 'DELETE_PLAYLIST',
    payload: { id: playlistId }
  })
}

export default Store;