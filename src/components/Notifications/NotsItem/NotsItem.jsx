import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'
import { string } from 'prop-types'

import Alert from 'react-bootstrap/Alert'

import { delNot } from '../../../store/reducers/nots/notsReducer'

import { getNotType } from '../functions'

const NotsItem = memo(({ type, msg, id }) => {
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
			dispatch(delNot({ id }))
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

NotsItem.propTypes = {
	type: string.isRequired,
	msg: string.isRequired,
	id: string.isRequired,
}

export default NotsItem
