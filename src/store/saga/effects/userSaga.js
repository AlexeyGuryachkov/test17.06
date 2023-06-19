import { call, put, takeEvery } from 'redux-saga/effects'

import usersApi from '../../../api/users-api'

import {
	ASYNC_SET_USER,
	ASYNC_SET_USER_POSTS,
	RESET_USER_DATA,
	setIsLoading,
	setUserById,
	setUserPosts,
} from '../../reducers/users/usersReducer'
import { setNots } from '../../reducers/nots/notsReducer'

import { getRandomId } from '../../../functions'

/*задержка для прелоадера*/
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/* получение и сохранение в стэйт данных о юзере */
function* usersWorker(action) {
	yield put(setIsLoading({ isLoading: true }))
	yield delay(500)

	try {
		const user = yield call(usersApi.getUserById, { userId: action.payload.userId })
		yield put(setUserById({ user }))
	} catch (e) {
		yield put(setNots({ nots: { id: getRandomId(), type: 'error', msg: e.message } }))
	}

	yield put(setIsLoading({ isLoading: false }))
}

/* получение и сохранение в стэйт постов юзера */
function* userPostsWorker(action) {
	yield put(setIsLoading({ isLoading: true }))
	yield delay(500)

	try {
		const userPosts = yield call(usersApi.getUserPosts, { userId: action.payload.userId })
		yield put(setUserPosts({ userPosts }))
	} catch (e) {
		yield put(setNots({ nots: { id: getRandomId(), type: 'error', msg: e.message } }))
	}

	yield put(setIsLoading({ isLoading: false }))
}

/* сброс стэйта*/
function* resetUserDataWorker() {
	yield put(setUserById({ user: {} }))
	yield put(setUserPosts({ userPosts: [] }))
}

export function* usersWatcher() {
	yield takeEvery(ASYNC_SET_USER, usersWorker)
	yield takeEvery(ASYNC_SET_USER_POSTS, userPostsWorker)
	yield takeEvery(RESET_USER_DATA, resetUserDataWorker)
}
