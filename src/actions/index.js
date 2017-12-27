import axios from 'axios';

const API_KEY = '?key=reagan123';
const API_URL = 'http://reduxblog.herokuapp.com/api/';

export const FETCH_POSTS = 'fetch_posts';
export const POST_CREATED = 'post_created';

export function fetchPosts() {
  console.log('fetch posts action');
  const request = axios.get(`${API_URL}posts${API_KEY}`);
  console.log(request);
  return {
    type: FETCH_POSTS,
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