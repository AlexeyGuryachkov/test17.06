import { call, put, takeEvery } from 'redux-saga/effects'

import {
	ASYNC_SET_COMMENTS,
	ASYNC_SET_POSTS,
	RESET_POSTS,
	setComments,
	setIsLoading,
	setPosts,
} from '../reducers/posts/postReducer'

import postsApi from '../../api/posts-api'

/*задержка для прелоадера*/
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/* получение и сохранение в стэйт постов */
function* postsWorker(action) {
	yield put(setIsLoading({ isLoading: true }))
	yield delay(500)
	try {
		const posts = yield call(postsApi.requestPosts, action.payload)
		yield put(setPosts({ posts }))
	} catch (e) {
		/*to aguryachkov: не забыть про нотификацию*/
		console.log(e)
	}
	yield put(setIsLoading({ isLoading: false }))
}

/* получение и сохранение в стэйт комментов по айди поста */
function* commentsWorker(action) {
	yield put(setIsLoading({ isLoading: true }))
	yield delay(500)
	try {
		const comments = yield call(postsApi.requestComments, { postId: action.payload.postId })
		yield put(setComments({ comments }))
	} catch (e) {
		/*to aguryachkov: не забыть про нотификацию*/
		console.log(e)
	}
	yield put(setIsLoading({ isLoading: false }))
}

/* сброс стэйта */
function* resetPosts() {
	yield put(setPosts({ posts: [] }))
	yield put(setComments({ comments: [] }))
}

export function* postsWatcher() {
	yield takeEvery(ASYNC_SET_POSTS, postsWorker)
	yield takeEvery(ASYNC_SET_COMMENTS, commentsWorker)
	yield takeEvery(RESET_POSTS, resetPosts)
}