import { all } from 'redux-saga/effects'

import { postsWatcher } from './effects/postsSaga'

export function* rootWatcher() {
	yield all([postsWatcher()])
}
