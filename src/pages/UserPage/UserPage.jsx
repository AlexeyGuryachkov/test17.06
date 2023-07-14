import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import UserInfo from './UserInfo/UserInfo'
import UserPosts from './UserPosts/UserPosts'
import Preloader from '../../components/Preloader/Preloader'

import { requestUser, requestUserPosts, resetUserData } from '../../store/reducers/user/userReducer'

import { getIsLoading } from '../../store/reducers/user/userSelectors'

import './UserPage.scss'

const UserPage = () => {
	const dispatch = useDispatch()
	const { id } = useParams()

	const isLoading = useSelector(getIsLoading)

	useEffect(() => {
		dispatch(requestUser({ userId: id }))
		dispatch(requestUserPosts({ userId: id }))
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
}

export default UserPage
