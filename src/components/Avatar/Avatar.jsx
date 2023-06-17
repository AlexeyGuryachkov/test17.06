import React, { memo } from 'react'
import { node, string } from 'prop-types'

import avatar from '../../assets/media/user-blue-icon.jpg'

import './Avatar.scss'

const Avatar = memo(({ img, size }) => (
	<div className={`img-wrapper ${size}`}>
		<img className="avatar" src={img} alt="avatar" />
	</div>
))

Avatar.defaultProps = {
	img: avatar,
	size: 'medium',
}

Avatar.propTypes = {
	img: node,
	size: string,
}

export default Avatar
