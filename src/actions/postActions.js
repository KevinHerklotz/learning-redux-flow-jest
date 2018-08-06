import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts() {
  return (dispatch:Function) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts,
      }));
  };
}
