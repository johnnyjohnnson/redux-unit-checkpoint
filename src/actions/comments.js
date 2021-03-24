// Action Creator
// functions that perform tasks and dispatch actions
// dipatch-method: sends the action to the reducer

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchComments = () => {
    return async dispatch => {
        const resp = await fetch("http://localhost:8082/api/comments");
        const respBody = await resp.json();
        dispatch({
            type: FETCH_COMMENTS,
            comments: respBody
        })
    }
}

export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';
export const submitComment = ( content, post_id ) => {
    let bodyComment = { content, post_id }
    return async dispatch => {
        const resp = await fetch("http://localhost:8082/api/comments", {
            method: "POST",
            body: JSON.stringify( bodyComment ),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const respBody = await resp.json();
        dispatch({
            type: SUBMIT_COMMENT,
            comment: respBody
        })
    }
}