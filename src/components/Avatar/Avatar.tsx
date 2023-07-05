import { FC, memo } from 'react'

import avatar from '../../assets/media/user-blue-icon.jpg'

import './Avatar.scss'

const Avatar: FC<Props> = memo(({ img = avatar, size = 'medium' }) => (
	<div className={`img-wrapper ${size}`}>
		<img className="avatar" src={img} alt="avatar" />
	</div>
))

interface Props {
	img?: string
	size?: string
}

export default Avatar
