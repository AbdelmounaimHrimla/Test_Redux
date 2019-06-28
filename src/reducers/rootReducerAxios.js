const initialState = {
    posts : [ ],
    title :'',
    body : '' 

}

const rootReducerAxios = (state= initialState, action) => {
    if (action.type === 'SET_POSTS') {
        return {
            ...state,
            posts : action.posts
        }
    } else if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts : newPosts
        }
    }
    return state;
}

export default rootReducerAxios;