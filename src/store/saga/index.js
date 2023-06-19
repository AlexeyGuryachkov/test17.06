import { all } from 'redux-saga/effects'

import { postsWatcher } from './effects/postsSaga'
import { usersWatcher } from './effects/userSaga'

export function* rootWatcher() {
	yield all([postsWatcher(), usersWatcher()])
}
