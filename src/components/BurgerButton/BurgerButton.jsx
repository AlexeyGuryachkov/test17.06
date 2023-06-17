import React, { memo } from 'react'
import { bool, func } from 'prop-types'
import cn from 'classnames'

import './BurgerButton.scss'

const BurgerButton = memo(({ onClick, active }) => (
	<div className={cn('burger-button', { active })} onClick={onClick} role="button" tabIndex={0}>
		<i />
	</div>
))

BurgerButton.defaultProps = {
	onClick: () => {},
	active: false,
}

BurgerButton.propTypes = {
	onClick: func,
	active: bool,
}

export default BurgerButton
