import React, { memo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

import BurgerButton from '../BurgerButton/BurgerButton'
import NavMenu from '../NavMenu/NavMenu'

import './Header.scss'

const Header = memo(() => {
	const [showMenu, setShowMenu] = useState(false)
	const { pathname } = useLocation()

	/*использую как условие для отрисовки кнопки "назад" на странице пользователя (т.з., п.3.4)*/
	const isUserPage = pathname.includes('/user-page')

	const handleClick = () => {
		setShowMenu(!showMenu)
	}

	return (
		<div className="header">
			<BurgerButton active={showMenu} onClick={handleClick} />
			<div className="button-wrapper">{isUserPage && <Button href="/">Назад</Button>}</div>
			<Offcanvas show={showMenu} onHide={handleClick}>
				<NavMenu setShowMenu={handleClick} />
			</Offcanvas>
		</div>
	)
})

export default Header
