export const fetchAllPost = () => {
    return {
        type: "FETCH_ALL_POST",
    }
}
export const fetchAllPostSuccess = (posts) => {
    return {
        type: "FETCH_ALL_POST_SUCCESS",
        payload: posts
    }
}

