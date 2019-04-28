import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const classname = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={classname}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

/*****  CLIENT_SIDE FORM VALIDATION *****/

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    //  User did not enter a title
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    //  User did not enter a title
    errors.description = "You must enter a description";
  }
  return errors;
};

/*****  CLIENT_SIDE FORM VALIDATION *****/

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);

