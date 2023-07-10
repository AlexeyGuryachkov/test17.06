import instance from './api'

import { IPostsResponce, IPostFilters } from '../store/reducers/posts/types'

const postsApi = {
	async requestPosts(filters: IPostFilters) {
		const { limit, page, searchText, sortBy, sortOrder } = filters

		const response = await instance.get<string, IPostsResponce>(
			`/posts?title_like=${searchText}&_sort=${sortBy}&_order=${sortOrder}&_limit=${limit}&_page=${page}`
		)

		const count: number = Number(response.headers.get('X-Total-Count'))

		return { posts: response.data, count }
	},
	async requestComments(postId: number) {
		const response = await instance.get(`/posts/${postId}/comments`)

		return response.data
	},
}

export default postsApi
