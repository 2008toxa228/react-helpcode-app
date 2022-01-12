import {combineReducers} from 'redux'

import PageReducer from './reducers/pageReducer'
import PostsPreviewsReducer from './reducers/postsPreviewsReducer';
import TokensReducer from './reducers/tokensReducer';
import UserReducer from './reducers/userReducer';

// export default pageReducer;

export default combineReducers({
  pageReducer: PageReducer,
  postsPreviewsReducer: PostsPreviewsReducer,
  tokensReducer: TokensReducer,
  userReducer: UserReducer
})