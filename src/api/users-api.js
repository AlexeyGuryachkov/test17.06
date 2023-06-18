import inctanceApi from './api'

const usersApi = {
	async getUserById({ userId }) {
		const response = await inctanceApi.get(`/users/${userId}`)

		return response.data
	},
	async getUserPosts({ userId }) {
		const response = await inctanceApi.get(`/users/${userId}/posts`)

		return response.data
	},
}

export default usersApi
