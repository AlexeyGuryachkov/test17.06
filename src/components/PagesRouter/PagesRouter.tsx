import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPosts from '../../pages/MainPosts/MainPosts'
import UserPage from '../../pages/UserPage/UserPage'
import AboutMe from '../../pages/AboutMe/AboutMe'

const PagesRouter: FC = () => (
	<Routes>
		<Route path="/" element={<MainPosts />} />
		<Route path="/user-page/:id?" element={<UserPage />} />
		<Route path="/about-me" element={<AboutMe />} />
	</Routes>
)

export default PagesRouter
