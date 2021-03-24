// the reducer is a function that takes the current state and action
// and returns a new state
// reducer looks for the action type and decides upon that what to do
// finally returns the new altered copy of the state, depending on the action-type

import {
    SUBMIT_COMMENT,
    FETCH_COMMENTS
  } from '../actions/comments';
  
  const initialState = {
    comments: []
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COMMENTS:
        const copyOfState = {...state, comments: action.comments};
        return copyOfState
      case SUBMIT_COMMENT:
        return {...state, comments: state.comments.concat(action.comment)}
      default:
        return state;
    }
  }