import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	nots: [{ type: '', msg: '', id: '' }],
}

const nots = createSlice({
	name: 'nots',
	initialState,
	reducers: {
		addNot: (state, action) => {
			state.nots = action.payload.not
		},
		delNot: (state, action) => {
			state.nots = state.nots.filter(({ id }) => id !== action.payload.id)
		},
	},
})

const { actions, reducer } = nots

export const { addNot, delNot } = actions

export default reducer
