import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import postsApi from '../../../api/posts-api'

import { addNot } from '../nots/notsReducer'

import { IComment, IPost, IPostFilters, InititalState } from './types'

import { delay, getRandomId } from '../../../functions'
import { BaseThunk, SliceActions } from '../../store'
import { NotsActions } from '../nots/notsReducer'

const initialState: InititalState = {
	posts: [],
	count: 0,
	isLoading: false,
	comments: [],
	showComments: [0],
	filters: {
		limit: 10,
		page: 1,
		sortBy: '',
		sortOrder: '',
		searchText: '',
	},
}

const posts = createSlice({
	name: 'postsPage',
	initialState,
	reducers: {
		setPosts: (
			state,
			action: PayloadAction<{
				posts: IPost[]
				count: number | null
			}>
		) => {
			state.posts = action.payload.posts
			state.count = action.payload.count!
		},

		setComments: (state, action: PayloadAction<IComment[]>) => {
			state.comments = [...state.comments, ...action.payload]
		},

		setShowComments: (state, action: PayloadAction<number>) => {
			if (state.showComments.includes(action.payload)) {
				state.showComments = state.showComments.filter((id) => id !== action.payload)
			} else {
				state.showComments = [...state.showComments, action.payload]
			}
		},

		setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading
		},

		setFilters: (state, action: PayloadAction<IPostFilters>) => {
			state.filters = { ...state.filters, ...action.payload }
		},
	},
})

const { actions, reducer } = posts

export const { setPosts, setComments, setIsLoading, setFilters, setShowComments } = actions

export const requestPosts =
	({ filters }: { filters: IPostFilters }): Thunk =>
	async (dispatch) => {
		dispatch(setIsLoading({ isLoading: true }))
		delay(500)

		try {
			const result = await postsApi.requestPosts(filters)
			dispatch(setPosts(result))
		} catch (err: any) {
			dispatch(addNot({ id: getRandomId(), type: 'error', msg: err.message }))
		}

		dispatch(setIsLoading({ isLoading: false }))
	}

//todo CHECK THIS
export const resetPostsState = (): Thunk => (dispatch) => {
	dispatch(setPosts({ posts: [], count: 0 }))
	dispatch(setComments([]))
}

export const requestComments =
	({ postId }: { postId: number }): Thunk =>
	async (dispatch) => {
		dispatch(setIsLoading({ isLoading: true }))
		delay(500)

		try {
			const result = await postsApi.requestComments(postId)
			dispatch(setComments(result))
		} catch (err: any) {
			dispatch(addNot({ id: getRandomId(), type: 'error', msg: err.message }))
		}

		dispatch(setIsLoading({ isLoading: false }))
	}

export default reducer

export type PostActions = SliceActions<typeof actions>
type Thunk = BaseThunk<PostActions | NotsActions, void>
