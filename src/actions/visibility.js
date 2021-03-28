// Action Creator
// functions that perform tasks and dispatch actions
// dipatch-method: sends the action to the reducer


export const CHANGE_COMMENT_VISIBILITY = 'CHANGE_COMMENT_VISIBILITY';
export const toggleCommentVisibility = () => {
    return dispatch => {
        dispatch({type: CHANGE_COMMENT_VISIBILITY})
    }
}