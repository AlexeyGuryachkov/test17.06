import { createSlice } from '@reduxjs/toolkit'

import postsApi from '../../../api/posts-api'

import { addNot } from '../nots/notsReducer'

import { delay, getRandomId } from '../../../functions.ts'

const initialState = {
	posts: [],
	count: null,
	isLoading: false,
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
		setPosts: (state, action) => {
			state.posts = action.payload.posts.posts
			state.count = action.payload.posts.count
		},

		setComments: (state, action) => {
			state.comments = [...state.comments, ...action.payload.comments]
		},

		setIsLoading: (state, action) => {
			state.isLoading = action.payload.isLoading
		},

		setFilters: (state, action) => {
			state.filters = { ...state.filters, ...action.payload }
		},
	},
})

const { actions, reducer } = posts

export const { setPosts, setComments, setIsLoading, setFilters } = actions

export const requestPosts =
	({ filters }) =>
	async (dispatch) => {
		dispatch(setIsLoading({ isLoading: true }))
		delay(500)

		try {
			const result = await postsApi.requestPosts(filters)
			dispatch(setPosts({ posts: result }))
		} catch (err) {
			dispatch(addNot({ not: { id: getRandomId(), type: 'error', msg: err.message } }))
		}

		dispatch(setIsLoading({ isLoading: false }))
	}

export const resetPostsState = () => (dispatch) => {
	dispatch(setPosts({ posts: { posts: [], count: null } }))
	dispatch(setComments({ comments: [] }))
}

export const requestComments =
	({ postId }) =>
	async (dispatch) => {
		dispatch(setIsLoading({ isLoading: true }))
		delay(500)

		try {
			const result = await postsApi.requestComments(postId)
			dispatch(setComments({ comments: result }))
		} catch (err) {
			dispatch(addNot({ not: { id: getRandomId(), type: 'error', msg: err.message } }))
		}

		dispatch(setIsLoading({ isLoading: false }))
	}

export default reducer
