import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import postsApi from '../../../api/posts-api'

import { BaseThunk, SliceActions } from '../../store'

import { IComment, IPost, IPostFilters, InititalState } from './types'

import { addNot, NotsActions } from '../nots/notsReducer'

import { delay, getRandomId } from '../../../functions'

const initialState: InititalState = {
	posts: [],
	count: 0,
	isLoading: false,
	isCommentsLoading: false,
	comments: [],
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

		setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading
		},
		setIsCommentsLoading: (state, action: PayloadAction<{ isCommentsLoading: boolean }>) => {
			state.isCommentsLoading = action.payload.isCommentsLoading
		},

		setFilters: (state, action: PayloadAction<IPostFilters>) => {
			state.filters = { ...state.filters, ...action.payload }
		},
	},
})

const { actions, reducer } = posts

export const { setPosts, setComments, setIsLoading, setFilters, setIsCommentsLoading } = actions

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

export const resetPostsState = (): Thunk => (dispatch) => {
	dispatch(setPosts({ posts: [], count: 0 }))
	dispatch(setComments([]))
}

export const requestComments =
	({ postId }: { postId: number }): Thunk =>
	async (dispatch, getState) => {
		const {
			postsPage: { comments },
		} = getState()

		if (!comments.map((comment: IComment) => comment.postId).includes(postId)) {
			dispatch(setIsCommentsLoading({ isCommentsLoading: true }))
			delay(500)

			try {
				const result = await postsApi.requestComments(postId)
				dispatch(setComments(result))
			} catch (err: any) {
				dispatch(addNot({ id: getRandomId(), type: 'error', msg: err.message }))
			}

			dispatch(setIsCommentsLoading({ isCommentsLoading: false }))
		}
	}

export default reducer

export type PostActions = SliceActions<typeof actions>
type Thunk = BaseThunk<PostActions | NotsActions, void>
