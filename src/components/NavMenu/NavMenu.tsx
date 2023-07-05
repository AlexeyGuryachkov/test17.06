import { FC, memo, useState } from 'react'

import NavTab from './NavTab/NavTab'

import './NavMenu.scss'

const NavMenu: FC<Props> = memo(({ setShowMenu }) => {
	const [activeTab, setActiveTab] = useState<number>(0)

	const handleSetTab = (tab: number) => () => {
		setActiveTab(tab)
		setShowMenu()
	}

	return (
		<div className="nav-menu">
			<NavTab onClick={handleSetTab(1)} isActive={activeTab === 1} title="Главная" link="/" />
			<NavTab
				onClick={handleSetTab(2)}
				isActive={activeTab === 2}
				title="Обо мне"
				link="/about-me"
			/>
		</div>
	)
})

interface Props {
	setShowMenu: () => void
}

export default NavMenu
