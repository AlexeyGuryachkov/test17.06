import React, { memo, useEffect } from 'react'
import cn from 'classnames'
import { bool } from 'prop-types'

import Spinner from 'react-bootstrap/Spinner'

import './Preloader.scss'

const Preloader = memo(({ isShow }) => {
	useEffect(() => {
		if (isShow) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = null
		}
	}, [isShow])
	return (
		<div className={cn('preloader-wrapper', { show: isShow })}>
			<Spinner className="preloader" animation="border" variant="primary" />
		</div>
	)
})

Preloader.propTypes = {
	isShow: bool.isRequired,
}

export default Preloader
