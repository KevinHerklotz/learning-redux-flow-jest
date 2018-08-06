import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

type PostFormProps = {
  createPost:Function,
};
type PostFormState = {
  title:string,
  body:string,
};

class PostForm extends Component<PostFormProps, PostFormState> {
  constructor(props:Object) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    (this:any).onChange = this.onChange.bind(this);
    (this:any).onSubmit = this.onSubmit.bind(this);
  }

  onChange(event:SyntheticEvent<any>) {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  onSubmit(event:SyntheticEvent<any>) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title:{' '}
              <br />
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="body">Body:{' '} {/* eslint-disable-line jsx-a11y/label-has-for */}
              <br />
              <textarea
                type="textarea"
                name="body"
                id="body"
                value={this.state.body}
                onChange={this.onChange}
              />
            </label>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPost })(PostForm);
