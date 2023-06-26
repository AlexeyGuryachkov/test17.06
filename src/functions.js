/* функция-генератор случайных идентификаторов*/
export const getRandomId = () => {
	return Math.random().toString(36).substring(7)
}

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
