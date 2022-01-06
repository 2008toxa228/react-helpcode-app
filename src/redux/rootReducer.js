import {combineReducers} from 'redux'

import PageReducer from './reducers/pageReducer'
import PostsPreviewsReducer from './reducers/postsPreviewsReducer';

// export default pageReducer;

export default combineReducers({
  pageReducer: PageReducer,
  postsPreviewsReducer: PostsPreviewsReducer
})