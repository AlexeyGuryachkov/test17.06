import { createSlice } from '@reduxjs/toolkit'

import userApi from '../../../api/user-api'

import { addNot } from '../nots/notsReducer'

import { delay, getRandomId } from '../../../functions.ts'

const initialState = {
	user: {},
	userPosts: [],
	isLoading: false,
}

const user = createSlice({
	name: 'userPage',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload.user
		},
		setPosts: (state, action) => {
			state.userPosts = action.payload.userPosts
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload.isLoading
		},
	},
})

const { actions, reducer } = user

export const { setUser, setPosts, setIsLoading } = actions

export const requestUser =
	({ userId }) =>
	async (dispatch) => {
		dispatch(setIsLoading({ isLoading: true }))
		delay(500)

		try {
			const result = await userApi.getUserById({ userId })
			dispatch(setUser({ user: result }))
		} catch (err) {
			dispatch(addNot({ not: { id: getRandomId(), type: 'error', msg: err.message } }))
		}

		dispatch(setIsLoading({ isLoading: false }))
	}

export const requestUserPosts =
	({ userId }) =>
	async (dispatch) => {
		dispatch(setIsLoading({ isLoading: true }))
		delay(500)

		try {
			const result = await userApi.getUserPosts({ userId })
			dispatch(setPosts({ userPosts: result }))
		} catch (err) {
			dispatch(addNot({ not: { id: getRandomId(), type: 'error', msg: err.message } }))
		}

		dispatch(setIsLoading({ isLoading: false }))
	}

export const resetUserData = () => (dispatch) => {
	dispatch(setUser({ user: {} }))
	dispatch(setPosts({ userPosts: [] }))
}

export default reducer
