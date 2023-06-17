import React, { memo, useState } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas'

import BurgerButton from '../BurgerButton/BurgerButton'
import NavMenu from '../NavMenu/NavMenu'

import './Header.scss'

const Header = memo(() => {
	const [showMenu, setShowMenu] = useState(false)

	const handleClick = () => {
		setShowMenu(!showMenu)
	}

	return (
		<div className="header">
			<BurgerButton active={showMenu} onClick={handleClick} />
			<Offcanvas show={showMenu} onHide={handleClick}>
				<NavMenu setShowMenu={handleClick} />
			</Offcanvas>
		</div>
	)
})

export default Header
