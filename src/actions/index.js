import axios from 'axios';

const API_KEY = '?key=reagan123';
const API_URL = 'http://reduxblog.herokuapp.com/api/';

export const FETCH_POSTS = 'fetch_posts';
export const POST_CREATED = 'post_created';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

export function fetchPosts() {
/*   const request = axios.get(`${API_URL}posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }; */
  // Rewriting using redux-thunk
  return (dispatch) => {
    axios.get(`${API_URL}posts${API_KEY}`).then((response) => {
      dispatch({
        type: FETCH_POSTS,
        payload: response // we can directly send the data to the reducer too. 
        // Sending the response as it is to avoid changing reducer.
      });
    })
  };
}

export function fetchPost(id) {
  const request = axios.get(`${API_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${API_URL}/posts${API_KEY}`, values).then(() => callback());
  return {
    type: POST_CREATED,
    action: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${API_URL}/posts/${id}${API_KEY}`).then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}