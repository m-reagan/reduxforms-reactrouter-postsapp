import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  form: FormReducer,
  posts: PostsReducer
});

export default rootReducer;
