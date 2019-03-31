import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    const { description, links, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a href={links.html} target="_blank" rel="noopener noreferrer">
          <img src={urls.regular} alt={description} ref={this.imageRef} />
        </a>
      </div>
    );
  }
}

export default ImageCard;
