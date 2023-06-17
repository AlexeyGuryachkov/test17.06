import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'

import NavTab from './NavTab/NavTab'

import './NavMenu.scss'

const NavMenu = memo(({ setShowMenu }) => {
	const [activeTab, setActiveTab] = useState(0)

	const handleSetTab = (tab) => () => {
		setActiveTab(tab)
	}

	return (
		<div className="nav-menu">
			<NavTab
				setShowMenu={setShowMenu}
				onClick={handleSetTab(1)}
				isActive={activeTab === 1}
				title="Главная"
				link="/"
			/>
			<NavTab
				setShowMenu={setShowMenu}
				onClick={handleSetTab(2)}
				isActive={activeTab === 2}
				title="Обо мне"
				link="/about-me"
			/>
		</div>
	)
})

const { func } = PropTypes

NavMenu.propTypes = {
	setShowMenu: func.isRequired,
}

export default NavMenu
