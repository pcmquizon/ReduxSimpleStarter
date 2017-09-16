import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { APP_ROOT_URL } from '../config';
import { createPost } from '../actions/index';

class PostsNew extends Component {

  constructor(props) {
    super(props);
    this.renderField = this.renderField.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  renderField(field) {
    const { meta } = field;
    const invalid = meta.touched && meta.error;
    const className = `form-group ${ meta.touched ? meta.error ? 'has-danger' : 'has-success' : ''}`;

    return(
      <div className={className}>
        <label className="form-control-label">{field.label}</label>
        <input
          type={field.type}
          className="form-control"
          {...field.input}
        />
        {invalid &&
          <div className="form-control-feedback">{meta.error}</div>
        }
      </div>
    );

  };

  onFormSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push(`${APP_ROOT_URL}/`);
    });
  }

  render() {
    const {
      handleSubmit
    } = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            type="text"
            component={this.renderField}
          />
          <div className="btn-group mr-2">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <div className="btn-group">
            <Link className="btn btn-danger btn-outline" to={`${APP_ROOT_URL}/`}>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return {
    createPost: createPost
  };
};

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a title";
  }

  if(!values.categories) {
    errors.categories = "Enter at least one category";
  }

  if(!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
};

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(
    null,
    mapDispatchToProps
  )(PostsNew)
);

