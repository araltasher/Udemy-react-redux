import React, { Component } from "react";
import UserCreate from './UserCreate';

class App extends Component {
  state = {
    language: "eng"
  };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language: &#8192;
          <i className="flag us" onClick={() => this.onLanguageChange("en")} />
          &#8192;
          <i className="flag tr" onClick={() => this.onLanguageChange("tr")} />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
