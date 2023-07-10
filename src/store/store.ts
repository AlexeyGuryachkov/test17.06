import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import postsPage from './reducers/posts/postReducer'
import userPage from './reducers/user/userReducer'
import nots from './reducers/nots/notsReducer'

const reducers = { postsPage, userPage, nots }

const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializebleCheck: false,
			thunk: true,
		}),
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type SliceActions<T> = {
	[K in keyof T]: T[K] extends (...args: any[]) => infer A ? A : never
}[keyof T]

export type BaseThunk<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>
