import React, { Component } from 'react';

type PostsProps = {};
type Post = {
  id: number,
  title: string,
  body: string,
  };
type PostsState = {
  posts: Array<Post>
}

class Posts extends Component<PostsProps, PostsState> {
  constructor(props:Object) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    // console.log(this.state.posts.map(x => x.id));
    const postItems = this.state.posts.map(post => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </article>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
