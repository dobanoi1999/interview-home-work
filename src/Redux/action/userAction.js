

export const fetchUser = () => {
    return {
        type: "FETCH_USER"
    }
}
export const fetchUserSuccess = (users) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: users
    }
}