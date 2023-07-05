import { FC, memo } from 'react'
import cn from 'classnames'

import './BurgerButton.scss'

const BurgerButton: FC<Props> = memo(({ onClick, active }) => (
	<div className={cn('burger-button', { active })} onClick={onClick} role="button" tabIndex={0}>
		<i />
	</div>
))

interface Props {
	onClick: () => void
	active: Boolean
}

export default BurgerButton
