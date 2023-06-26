import inctanceApi from './api'

const userApi = {
	async getUserById({ userId }) {
		const response = await inctanceApi.get(`/users/${userId}`)

		return response.data
	},
	async getUserPosts({ userId }) {
		const response = await inctanceApi.get(`/users/${userId}/posts`)

		return response.data
	},
}

export default userApi
