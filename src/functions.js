/* функция-генератор случайных идентификаторов*/
export const getRandomId = () => {
	return Math.random().toString(36).substring(7)
}