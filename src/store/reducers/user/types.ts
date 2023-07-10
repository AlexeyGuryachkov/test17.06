import { IPost } from '../posts/types'

export interface InititalState {
	user: IUser
	userPosts: IPost[] | []
	isLoading: boolean
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
