import { AxiosHeaders } from 'axios'

export interface InititalState {
	posts: IPost[] | []
	count: number
	isLoading: boolean
	comments: IComment[] | []
	filters: IPostFilters
	showComments: number[]
}

export interface IPostFilters {
	limit?: number
	page?: number
	searchText?: string
	sortBy?: string
	sortOrder?: string
	showComments?: boolean
}

export interface IPost {
	userId: number
	id: number
	title: string
	body: string
}

export interface IComment {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

export interface IPostsResponce {
	data: IPost[]
	headers: AxiosHeaders
}
