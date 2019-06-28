//Actions Here

export const setPosts = (posts) => {
    return {
        type : 'SET_POSTS',
        posts : posts
    }
}


export const deletePost = (id) => {
    return {
        type : 'DELETE_POST',
        id : id
    }
}