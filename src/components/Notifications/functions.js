export const getNotType = (type) => {
	if (!type) return 'light'

	const switchObj = {
		error: 'danger',
	}

	return switchObj[type]
}
