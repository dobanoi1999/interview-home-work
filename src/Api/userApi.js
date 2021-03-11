import axiosClient from './axiosClient'

const userApi = {
    fetchUser: () => {
        const url = "users"
        return axiosClient.get(url)
    }
}
export default userApi