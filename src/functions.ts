/* функция-генератор случайных идентификаторов*/
export const getRandomId = (): string => {
	return Math.random().toString(36).substring(7)
}

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
