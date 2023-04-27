import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './VideoComponent.css';

function VideoComponent({ encryptedUrl }) {
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef(null);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const skipIntro = () => {
    playerRef.current.seekTo(10, 'seconds');
  };

  const skipForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10, 'seconds');
  };

  const skipBackward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10, 'seconds');
  };

  const setVolume = (event) => {
    playerRef.current.setVolume(event.target.value / 100);
  };

  return (
    <div className="video-player-container">
      <ReactPlayer
        ref={playerRef}
        url={encryptedUrl}
        playing={playing}
        controls
        width="100%"
        height="auto"
      />

      <div className="custom-controls">
        <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={skipIntro}>Skip Intro</button>
        <button onClick={skipBackward}>Reverse 10s</button>
        <button onClick={skipForward}>Skip 10s</button>
        <input
          type="range"
          min="0"
          max="100"
          onChange={setVolume}
          defaultValue="100"
        />
      </div>
    </div>
  );
}

export default VideoComponent;
