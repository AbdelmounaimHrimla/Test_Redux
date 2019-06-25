const initialState = {
    posts : [
        {id: 1, title: 'Title 1', body : 'Body 1' },
        {id: 2, title: 'Title 2', body : 'Body 2' },
        {id: 3, title: 'Title 3', body : 'Body 3' }
    ]
}

const rootReducer = (state= initialState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST') {
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

export default rootReducer;