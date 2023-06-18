import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MainPostsItem from './MainPostsItem/MainPostsItem'
import Pagination from '../../components/Pagination/Pagination'

import { getPosts, resetPosts } from '../../store/reducers/posts/postReducer'

import { getIsLoading, getPostsCount, getPostsList } from '../../store/reducers/posts/postSelectors'
import Preloader from '../../components/Preloader/Preloader'

const MainPosts = memo(() => {
	const limit = 10
	const [offset, setOffset] = useState(0)
	const [posts, setPosts] = useState([])

	const allPosts = useSelector(getPostsList)
	const count = useSelector(getPostsCount)
	const isLoading = useSelector(getIsLoading)

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
				<MainPostsItem key={id + title[0]} id={id} title={title} body={body} userId={userId} />
			))}
			{count > limit && (
				<Pagination count={count} setOffset={setOffset} limit={limit} offset={offset} />
			)}
			<Preloader show={isLoading} />
		</div>
	)
})

export default MainPosts
