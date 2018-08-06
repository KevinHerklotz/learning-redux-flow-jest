import React, { Component } from 'react';

type PostformProps = {};
type PostformState = {
  title: string,
  body: string,
};

class Postform extends Component<PostformProps, PostformState> {
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

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(res => res.json())
      .then(data => console.log(data));
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

export default Postform;
