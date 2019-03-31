import React, { Component } from "react";
import "./scss/SearchBar.scss";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  /*
    You can create arrow functions
    instead of ES5 functions to
    avoid the binding issue.
    ES6 automatically handles binding
    */
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="container">
      <h1>Unsplash Search</h1>
        <form className="search" onSubmit={this.handleSubmit}>
            <input
              name="term"
              className="search__input"
              type="text"
              autoComplete="off"
              value={this.state.term}
              onChange={e => {
                this.setState({
                  term: e.target.value
                });
              }}
            />
          <button className="search__button">
            <svg className="search__icon">
              <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
            </svg> 
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
