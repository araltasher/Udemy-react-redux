import React, { Component } from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.onTermSubmit('reactjs');
  }

  onTermSubmit = async term => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ 
      videos: data.items.slice(1),
      selectedVideo: data.items[0]
    });
  };

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
