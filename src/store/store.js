import { configureStore } from '@reduxjs/toolkit'

import postsPage from './reducers/posts/postReducer'
import userPage from './reducers/user/userReducer'
import nots from './reducers/nots/notsReducer'

const reducers = { postsPage, userPage, nots }

const middleware = (getDefaultMiddleware) =>
	getDefaultMiddleware({
		immutableCheck: false,
		serializebleCheck: false,
		thunk: true,
	})

const store = configureStore({ reducer: reducers, middleware })

window.store = store

export default store
