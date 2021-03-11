

const postReducer = (posts = { data: [], loading: true }, action) => {
    switch (action.type) {
        case "FETCH_ALL_POST":
            return posts
        case "FETCH_ALL_POST_SUCCESS":

            return {
                data: [...action.payload],
                loading: false
            }
        default:
            return posts
    }
}
export default postReducer