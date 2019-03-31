import React, { Component } from "react";
import SearchBar from "./SearchBar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { video: "" };
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
