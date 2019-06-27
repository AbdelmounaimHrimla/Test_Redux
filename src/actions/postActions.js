export const deletePost = (id) => {
    return {
        type : 'DELETE_POST',
        id : id
    }
}


export const addPost = (id, title, body) => {
    return {
        type : 'ADD_POST',
        id : id,
        title :title,
        body : body 
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



export const SearchPost = () => {
    return {
        type : 'SEARCH_POST',
    }
}
