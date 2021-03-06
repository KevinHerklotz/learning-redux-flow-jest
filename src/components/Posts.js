import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';


type Post = {
  id: number,
  title: string,
  body: string,
};
type PostsProps = {
  fetchPosts: Function,
  posts: Array<Post>,
  newPost: Post,
};

class Posts extends Component<PostsProps> {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps:{newPost:Post}) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <article key={post.id}>
        <h3>{post.id}. {post.title}</h3>
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

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
