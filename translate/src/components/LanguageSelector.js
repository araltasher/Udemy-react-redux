import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {

    return (
      <div>
        Select a language: &#8192;
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("en")}
        />
        &#8192;
        <i
          className="flag tr"
          onClick={() => this.context.onLanguageChange("tr")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
