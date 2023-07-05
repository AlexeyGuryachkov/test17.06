import { AxiosHeaders } from 'axios'

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

export interface IUser {
	name: string
	email: string
	phone: string
	avatar?: string
	birthday?: string
	telegram?: string
	address?: {}
	company?: {}
}

export interface INot {
	type: string
	msg: string
	id: number
}
