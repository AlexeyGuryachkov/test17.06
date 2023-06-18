import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import posts from '../reducers/posts/postReducer'

import { rootWatcher } from './index'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	posts,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

window.store = store

sagaMiddleware.run(rootWatcher)
