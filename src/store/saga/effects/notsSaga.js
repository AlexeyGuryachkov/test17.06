import { put, takeEvery } from 'redux-saga/effects'

import { delNots } from '../../reducers/nots/notsReducer'

import { ASYNC_DEL_NOT } from '../../reducers/nots/notsReducer'

function* notsWorker(action) {
	yield put(delNots({ id: action.payload.id }))
}

export function* notsWatcher() {
	yield takeEvery(ASYNC_DEL_NOT, notsWorker)
}
