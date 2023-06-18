import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MainPostsItem from './MainPostsItem/MainPostsItem'

import { getPosts, resetPosts } from '../../store/reducers/posts/postReducer'

import { getPostsList } from '../../store/reducers/posts/postSelectors'

import { getRandomId } from '../../functions'

import './MainPosts.scss'

const MainPosts = memo(() => {
	const allPosts = useSelector(getPostsList)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	useEffect(
		() => () => {
			dispatch(resetPosts())
		},
		[dispatch]
	)

	if (!allPosts) return

	return (
		<div className="MainPosts">
			{allPosts.map(({ title, body, id, userId }) => (
				<MainPostsItem key={getRandomId()} id={id} title={title} body={body} userId={userId} />
			))}
		</div>
	)
})

export default MainPosts
