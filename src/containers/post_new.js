import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';

class PostNew extends Component {

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    })
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const errorClass = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={errorClass}>
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
        <div className="text-danger">{ touched ? error : ''}</div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.initialValues);
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Category"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Submit</button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </div>
      </form>
    );
  }
}

function validate(values) {
  let error = {};
  if (!values.title) {
    error.title = 'Enter a title';
  }

  if (!values.categories) {
    error.categories = 'Enter a category';
  }

  if (!values.content) {
    error.content = 'Enter a content';
  }

  return error;
}

const postNewForm = reduxForm({
  form: 'PostNewForm',
  enableReinitialize: true,
  validate
})(PostNew);

export default (connect((state) => {
  return {
    initialValues: {
      title: 'Any title',
      categories: 'Good category',
      content: 'Type in your content'
    }
  };
}, { createPost })(postNewForm));

