export const getNotType = (type: string) => {
	if (!type) return 'light'

	const switchObj: { [type: string]: string } = {
		error: 'danger',
	}

	return switchObj[type]
}
