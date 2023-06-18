import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MainPostsItem from './MainPostsItem/MainPostsItem'
import Pagination from '../../components/Pagination/Pagination'

import { getPosts, resetPosts } from '../../store/reducers/posts/postReducer'

import { getPostsCount, getPostsList } from '../../store/reducers/posts/postSelectors'

import { getRandomId } from '../../functions'

import './MainPosts.scss'

const MainPosts = memo(() => {
	const limit = 10
	const [offset, setOffset] = useState(0)
	const [posts, setPosts] = useState([])

	const allPosts = useSelector(getPostsList)
	const count = useSelector(getPostsCount)

	const dispatch = useDispatch()

	useEffect(() => {
		if (allPosts) {
			setPosts(allPosts.slice(offset, limit + offset))
		}
	}, [allPosts, offset, limit])

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
		<div className="main-posts">
			{posts.map(({ title, body, id, userId }) => (
				<MainPostsItem key={getRandomId()} id={id} title={title} body={body} userId={userId} />
			))}
			{count > limit && (
				<Pagination count={count} setOffset={setOffset} limit={limit} offset={offset} />
			)}
		</div>
	)
})

export default MainPosts
