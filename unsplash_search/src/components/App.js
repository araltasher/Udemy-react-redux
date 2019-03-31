import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  onSearchSubmit = async term => {
    const { data } = await unsplash.get("search/photos", {
      params: {
        query: term
      }
    });

    this.setState({
      images: data.results
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "2rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
