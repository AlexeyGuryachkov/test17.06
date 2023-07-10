import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import userApi from '../../../api/user-api'

import { NotsActions, addNot } from '../nots/notsReducer'

import { IUser, InititalState } from './types'

import { delay, getRandomId } from '../../../functions'
import { IPost } from '../posts/types'
import { BaseThunk, SliceActions } from '../../store'

const initialState: InititalState = {
	user: {
		name: '',
		email: '',
		phone: '',
		avatar: '',
		birthday: '',
		telegram: '',
		address: {},
		company: {},
	},
	userPosts: [],
	isLoading: false,
}

const user = createSlice({
	name: 'userPage',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<{ user: IUser }>) => {
			state.user = action.payload.user
		},
		setPosts: (state, action: PayloadAction<{ userPosts: IPost[] }>) => {
			state.userPosts = action.payload.userPosts
		},
		setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading
		},
	},
})

const { actions, reducer } = user

export const { setUser, setPosts, setIsLoading } = actions

export const requestUser =
	({ userId }: { userId: number }): Thunk =>
	async (dispatch) => {
		dispatch(setIsLoading({ isLoading: true }))
		delay(500)

		try {
			const result = await userApi.getUserById({ userId })
			dispatch(setUser({ user: result }))
		} catch (err: any) {
			dispatch(addNot({ id: getRandomId(), type: 'error', msg: err.message }))
		}

		dispatch(setIsLoading({ isLoading: false }))
	}

export const requestUserPosts =
	({ userId }: { userId: number }): Thunk =>
	async (dispatch) => {
		dispatch(setIsLoading({ isLoading: true }))
		delay(500)

		try {
			const result = await userApi.getUserPosts({ userId })
			dispatch(setPosts({ userPosts: result }))
		} catch (err: any) {
			dispatch(addNot({ id: getRandomId(), type: 'error', msg: err.message }))
		}

		dispatch(setIsLoading({ isLoading: false }))
	}

export const resetUserData = (): Thunk => (dispatch) => {
	dispatch(
		setUser({
			user: {
				name: '',
				email: '',
				phone: '',
				avatar: '',
				birthday: '',
				telegram: '',
				address: {},
				company: {},
			},
		})
	)
	dispatch(setPosts({ userPosts: [] }))
}

export default reducer

export type UserActions = SliceActions<typeof actions>
type Thunk = BaseThunk<UserActions | NotsActions, void>
