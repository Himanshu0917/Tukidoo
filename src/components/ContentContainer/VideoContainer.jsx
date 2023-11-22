import React from "react";
import ReactPlayer from "react-player";

const VideoContainer = () => {
  return (
    <div className="player-wrapper px-3 h-full">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=FxgM9k1rg0Q&pp=ygUIcmVhY3QganM%3D"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoContainer;
