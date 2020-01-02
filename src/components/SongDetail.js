import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ currentSong }) => {
  if (!currentSong) {
    return <h3>Please select a song.</h3>;
  }
  return (
    <div>
      <h3>Details for selected song:</h3>
      <h4>
        Title: {currentSong.title} <br /> Duration: {currentSong.duration}
      </h4>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
