import { FC, memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'

import Alert from 'react-bootstrap/Alert'

import { delNot } from '../../../store/reducers/nots/notsReducer'

import { getNotType } from '../functions'

const NotsItem: FC<Props> = memo(({ type, msg, id }) => {
	const [isNotVisible, setIsNotVisible] = useState(true)
	const dispatch = useDispatch()

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsNotVisible(false)
		}, 5000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch<any>(delNot({ id }))
		}, 5500)

		return () => {
			clearTimeout(timer)
		}
	}, [dispatch, id])

	return (
		<Alert className={cn('notification', { visible: isNotVisible })} variant={getNotType(type)}>
			{msg}
		</Alert>
	)
})

interface Props {
	type: string
	msg: string
	id: string
}

export default NotsItem
