import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import history from "../history";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={
          // We use e.stopPropagation to
          // Stop the history.push() to run
          // When we click anything inside
          //  of the modal
          e => e.stopPropagation()
        }
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default Modal;
