import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'

import cn from 'classnames'

import './NavTab.scss'

const NavTab: FC<Props> = memo(({ title, link, isActive, onClick }) => (
	<NavLink to={link} onClick={onClick} className={cn('nav-link-item', { active: isActive })}>
		{title}
	</NavLink>
))

interface Props {
	title: string
	link: string
	onClick: () => void
	isActive: boolean
}

export default NavTab
