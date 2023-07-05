import { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import NotsItem from './NotsItem/NotsItem'

import { getNots } from '../../store/reducers/nots/notsSelector'

import { INot } from '../../types/types'

import { getRandomId } from '../../functions'

import './Notifications.scss'

const Notifications: FC = memo(() => {
	const nots: INot[] = useSelector(getNots)

	return (
		<div className="notifications-wrapper">
			{nots.map(({ type, msg, id }: INot) => (
				<NotsItem key={getRandomId()} type={type} msg={msg} id={id} />
			))}
		</div>
	)
})

export default Notifications
