import React, { memo, useEffect } from 'react'
import cn from 'classnames'

import Spinner from 'react-bootstrap/Spinner'

import './Preloader.scss'

const Preloader = memo(({ show }) => {
	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = null
		}
	}, [show])
	return (
		<div className={cn('preloader-wrapper', { show })}>
			<Spinner className="preloader" animation="border" variant="primary" />
		</div>
	)
})

export default Preloader
