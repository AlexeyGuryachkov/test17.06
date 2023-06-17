import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import UserInfo from './UserInfo/UserInfo'
import UserPosts from './UserPosts/UserPosts'

import './UserPage.scss'

const UserPage = memo(() => {
	const { id } = useParams()

	return (
		<div className="user-page">
			<UserInfo id={id} />
			<UserPosts />
		</div>
	)
})

export default UserPage
