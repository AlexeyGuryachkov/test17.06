import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InititalState, INot } from './types'
import { SliceActions } from '../../store'

const initialState: InititalState = {
	nots: [],
}

const nots = createSlice({
	name: 'nots',
	initialState,
	reducers: {
		addNot: (state, action: PayloadAction<INot>) => {
			state.nots = [...state.nots, action.payload]
		},
		delNot: (state, action: PayloadAction<{ id: string }>) => {
			state.nots = state.nots.filter((id) => id !== action.payload)
		},
	},
})

const { actions, reducer } = nots

export const { addNot, delNot } = actions

export default reducer

export type NotsActions = SliceActions<typeof actions>
