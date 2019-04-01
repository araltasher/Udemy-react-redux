import React from "react";
import "./VideoItem.scss";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="ui image"
      />
      <div className="content">
        <h3 className="title">{video.snippet.title}</h3>
      </div>
    </div>
  );
};

export default VideoItem;
