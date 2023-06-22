import instance from './api'

const postsApi = {
	async requestPosts({ filters }) {
		const { limit, page, searchText, sortBy, sortOrder } = filters
		const response = await instance.get(
			`/posts?title_like=${searchText}&_sort=${sortBy}&_order=${sortOrder}&_limit=${limit}&_page=${page}`
		)
		const count = response.headers.get('X-Total-Count')

		return { posts: response.data, count }
	},
	async requestComments({ postId }) {
		const response = await instance.get(`/posts/${postId}/comments`)

		return response.data
	},
}

export default postsApi
