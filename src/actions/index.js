//Action creator
export const selectSongAC = song => {
  //Returns an action (object)
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
