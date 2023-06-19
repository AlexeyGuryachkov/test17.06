import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import UserInfo from './UserInfo/UserInfo'
import UserPosts from './UserPosts/UserPosts'
import Preloader from '../../components/Preloader/Preloader'

import { getUserById, getUserPosts, resetUserData } from '../../store/reducers/users/usersReducer'

import { getIsLoading } from '../../store/reducers/users/usersSelectors'

import './UserPage.scss'

const UserPage = memo(() => {
	const dispatch = useDispatch()
	const { id } = useParams()

	const isLoading = useSelector(getIsLoading)

	useEffect(() => {
		dispatch(getUserById({ userId: id }))
		dispatch(getUserPosts({ userId: id }))
	}, [dispatch, id])

	useEffect(
		() => () => {
			dispatch(resetUserData())
		},
		[dispatch]
	)

	return (
		<div className="user-page">
			<UserInfo />
			<UserPosts />
			<Preloader isShow={isLoading} />
		</div>
	)
})

export default UserPage
