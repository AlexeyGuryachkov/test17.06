import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPosts from '../../pages/MainPosts/MainPosts'
import UserPage from '../../pages/UserPage/UserPage'
import AboutMe from '../../pages/AboutMe/AboutMe'

const PagesRouter = memo(() => (
	<Routes>
		<Route exact path="/" element={<MainPosts />} />
		<Route exact path="/user-page/:id?" element={<UserPage />} />
		<Route exact path="/about-me" element={<AboutMe />} />

		<Route from="*" to="/" />
	</Routes>
))

export default PagesRouter
