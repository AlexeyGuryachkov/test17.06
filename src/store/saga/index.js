import { all } from 'redux-saga/effects'

import { postsWatcher } from './effects/postsSaga'
import { usersWatcher } from './effects/userSaga'
import { notsWatcher } from './effects/notsSaga'

export function* rootWatcher() {
	yield all([postsWatcher(), usersWatcher(), notsWatcher()])
}
