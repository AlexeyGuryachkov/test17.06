import instance from './api'

const postsApi = {
	async requestPosts() {
		const response = await instance.get('/posts')

		return response.data
	},
	async requestComments({ postId }) {
		const response = await instance.get(`/posts/${postId}/comments`)

		return response.data
	},
}

export default postsApi
