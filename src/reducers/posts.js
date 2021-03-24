// the reducer is a function that takes the current state and action
// and returns a new state
// reducer looks for the action type and decides upon that what to do
// finally returns the new altered copy of the state, depending on the action-type

import {
    CREATE_POST,
    FETCH_POSTS,
    VOTE_POST,
    FILTER_POSTS
  } from '../actions/posts';

const initialState = {
    posts: []
    }

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, posts: action.posts}
        case VOTE_POST:
            let copyOfPosts = state.posts.map(post => {
                if (post.id === action.post.id) {
                    return {...post, votes: action.post.votes};
                } else {
                    return post;
                }
            })
            return {...state, posts: copyOfPosts}
        case FILTER_POSTS:
            return {...state, posts: action.posts.filter(post => post.title.toLowerCase().includes(action.filterText.toLowerCase()))}
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.post]}
        default:
            return state;
    }
}