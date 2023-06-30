import { AxiosHeaders } from 'axios'

export interface IPostFilters {
	limit?: string
	page?: number
	searchText?: string
	sortBy?: string
	sortOrder?: string
	showComments?: boolean
}

interface IPost {
	userId: number
	id: number
	title: string
	body: string
}

export interface IPostsResponce {
	data: IPost[]
	headers: AxiosHeaders
}

export interface IPostState {
	posts: IPost[]
	count: null | number
}

export interface IComment {
	postId: number
	id: number
	name: string
	email: string
	body: string
}
