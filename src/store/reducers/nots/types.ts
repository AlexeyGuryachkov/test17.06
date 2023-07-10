export interface InititalState {
	nots: INot[] | []
}

export interface INot {
	type: string
	msg: string
	id: string
}
