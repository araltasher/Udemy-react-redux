import React, { Component } from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }
  onTermSubmit = async term => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
