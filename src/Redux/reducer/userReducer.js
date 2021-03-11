


const userReducer = (users = [], action) => {

    switch (action.type) {
        case "FETCH_USER":
            return users
        case "FETCH_USER_SUCCESS":

            return action.payload
        default:
            return users
    }
}
export default userReducer