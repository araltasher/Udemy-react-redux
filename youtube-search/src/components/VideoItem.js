import React from "react";
import "./VideoItem.scss";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="ui image"
      />
      <div className="content">
        <h3 className="title">{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
