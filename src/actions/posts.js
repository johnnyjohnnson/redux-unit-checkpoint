// Action Creator
// functions that perform tasks and dispatch actions
// dipatch-method: sends the action to the reducer

export const VALIDATE_POST = 'VALIDATE_POST';

export const CREATE_POST = "CREATE_POST";
export const createPost = (post) => {
    return async dispatch => {
        const resp = await fetch("http://localhost:8082/api/posts",
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( {author: post.author, content: post.body, title: post.title, img_url: post.image} )
        }
        )
        const respBody = await resp.json();
        dispatch({
            type: CREATE_POST,
            post: respBody
        })
    }
}

export const FETCH_POSTS = "FETCH_POSTS";
export const fetchPosts = () => {
    return async dispatch => {
        const respPosts = await fetch("http://localhost:8082/api/posts");
        const respPostsBody = await respPosts.json();
        dispatch({
            type: FETCH_POSTS,
            posts: respPostsBody
        })
    }
}

export const VOTE_POST = "VOTE_POST";
export const votePost = (upOrDownBool, id) => {
    let apiDest = upOrDownBool ? "increase" : "decrease";
    return async dispatch => {
        const resp = await fetch(`http://localhost:8082/api/posts/votes/${apiDest}/${id}`);
        const respBody = await resp.json();
        if (respBody.votes < 0) {
            respBody.votes = 0
        }
        dispatch({
            type: VOTE_POST,
            post: respBody
        })
    }
}

export const FILTER_POSTS = 'FILTER_POSTS';
export const filterPosts = (filterText) => {
    return async dispatch => {
        const respPosts = await fetch("http://localhost:8082/api/posts");
        const respPostsBody = await respPosts.json();
        dispatch({
            type: FILTER_POSTS,
            filterText,
            posts: respPostsBody
        })
    }
}