export const deletePost = (id) => {
    return {
        type : 'DELETE_POST',
        id : id
    }
}


export const addPost = (post) => {
    return {
        type : 'ADD_POST',
        post : post
    }
}

export const nextPage = (startSliced, endSliced) => {
    return {
        type : 'NEXT_PAGE',
        startSliced : startSliced,
        endSliced : endSliced
    }
}

export const prevPage = (startSliced, endSliced) => {
    return {
        type : 'PREVIOUS_PAGE',
        startSliced : startSliced,
        endSliced : endSliced
    }
}

export const firstPage = (startSliced, endSliced) => {
    return {
        type : 'FIRST_PAGE',
        startSliced : startSliced,
        endSliced : endSliced
    }
}

export const lastPage = (startSliced, endSliced) => {
    return {
        type : 'LAST_PAGE',
        startSliced : startSliced,
        endSliced : endSliced
    }
}



export const SearchPost = (searchText) => {
    return {
        type : 'SEARCH_POST',
        searchText : searchText
    }
}
