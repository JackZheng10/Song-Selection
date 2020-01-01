import { combineReducers } from "redux";

//Reducer
//Evaluates an action, if needed, and returns updated data
const songsListR = () => {
  return [
    { title: "Paris in the Rain", duration: "3:25" },
    { title: "Easy", duration: "5:15" },
    { title: "Jopping", duration: "4:08" },
    { title: "Make it Right", duration: "3:54" }
  ];
};

const selectedSongR = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
