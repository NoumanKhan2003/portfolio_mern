import React from 'react';
import ReactPlayer from 'react-player';
import careerup from '../Assests/careerup.mp4'
const VideoPlayer=()=> {
  return (
    <div>
      <ReactPlayer
        url={careerup}
        width="100%"
        height="100%"
        controls
        playing
        muted
      />
    </div>
  );
};

export default VideoPlayer;
