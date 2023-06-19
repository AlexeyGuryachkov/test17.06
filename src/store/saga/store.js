import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import posts from '../reducers/posts/postReducer'
import userById from '../reducers/users/usersReducer'

import { rootWatcher } from './index'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	posts,
	userById,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

window.store = store

sagaMiddleware.run(rootWatcher)
