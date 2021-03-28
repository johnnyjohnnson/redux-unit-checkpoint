// the store - creates the Store object
// takes in a "rootReducer" which is basically a combination of all reducers of your SPA
// takes in a initial state
// takes in the redux-thunk middleware which allows the store to dispatch action creators !!in addition to actions!!
import { createStore, applyMiddleware, combineReducers } from 'redux'
import postsReducer from './reducers/posts';
import commentsReducer from './reducers/comments';
// import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  postsReducer, commentsReducer
})

const initialState = {}


export default (/*initialState*/) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware( /*logger, */ thunkMiddleware))
  )
}
