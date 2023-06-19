const defaultState = {
	nots: [],
}

const SET_NOTS = 'SET_NOTS'
const DEL_NOT = 'DEL_NOT'
export const ASYNC_DEL_NOT = 'ASYNC_DEL_NOT'

export default function nots(state = defaultState, action) {
	switch (action.type) {
		case SET_NOTS: {
			return {
				...state,
				nots: [
					...state.nots.filter(({ msg }) => msg !== action.payload.nots.msg),
					action.payload.nots,
				],
			}
		}

		case DEL_NOT: {
			return { ...state, nots: [...state.nots.filter(({ id }) => id !== action.payload.id)] }
		}

		default:
			return state
	}
}

export const setNots = ({ nots }) => ({ type: SET_NOTS, payload: { nots } })
export const delNots = ({ id }) => ({ type: DEL_NOT, payload: { id } })
export const asyncDelNots = ({ id }) => ({ type: ASYNC_DEL_NOT, payload: { id } })
