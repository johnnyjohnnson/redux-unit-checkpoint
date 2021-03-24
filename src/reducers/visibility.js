// the reducer is a function that takes the current state and action
// and returns a new state
// reducer looks for the action type and decides upon that what to do
// finally returns the new altered copy of the state, depending on the action-type

import { 
    CHANGE_ADDPOSTFORM_VISIBILITY,
    CHANGE_COMMENT_VISIBILITY
} from '../actions/visibility';

const initialState = {
    AddPostFormEnabled: true,
    CommentSectionEnabled: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ADDPOSTFORM_VISIBILITY:
            return {...state, AddPostFormEnabled: !state.AddPostFormEnabled};
        case CHANGE_COMMENT_VISIBILITY:
            return {...state, CommentSectionEnabled: !state.CommentSectionEnabled}
        default:
            return state;
    }
}

