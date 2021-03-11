import axiosClient from "./axiosClient"


const postApi = {
    fetchAllPost: () => {
        const url = "posts"
        return axiosClient.get(url)
    },
    getPost: (id) => {
        const url = `posts/${id}`
        return axiosClient.get(url)
    }
}

export default postApi