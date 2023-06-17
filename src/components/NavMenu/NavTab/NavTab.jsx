import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { string, func, bool } from 'prop-types'
import cn from 'classnames'

import './NavTab.scss'

const NavTab = memo(({ title, link, setShowMenu, isActive }) => (
	<NavLink to={link} onClick={setShowMenu} className={cn('nav-link-item', { active: isActive })}>
		{title}
	</NavLink>
))

NavTab.Proptypes = {
	title: string.isRequired,
	link: string.isRequired,
	isActive: bool.isRequired,
	setShowMenu: func.isRequired,
}

export default NavTab
