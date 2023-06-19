import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MainPostsHeader from './MainPostsHeader/MainPostsHeader'
import MainPostsItem from './MainPostsItem/MainPostsItem'
import Pagination from '../../components/Pagination/Pagination'
import Preloader from '../../components/Preloader/Preloader'

import { getPosts, resetPosts } from '../../store/reducers/posts/postReducer'

import { getIsLoading, getPostsCount, getPostsList } from '../../store/reducers/posts/postSelectors'

const MainPosts = memo(() => {
	const allCount = useSelector(getPostsCount)
	const allPosts = useSelector(getPostsList)
	const isLoading = useSelector(getIsLoading)

	const limit = 10
	const [offset, setOffset] = useState(0)
	const [count, setCount] = useState(allCount)
	const [posts, setPosts] = useState([])

	const dispatch = useDispatch()

	useEffect(() => {
		setCount(allCount)
	}, [allCount])

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
			<MainPostsHeader
				allPosts={allPosts}
				limit={limit}
				offset={offset}
				setPosts={setPosts}
				setCount={setCount}
				setOffset={setOffset}
			/>
			{posts.map(({ title, body, id, userId }) => (
				<MainPostsItem key={id + title[0]} id={id} title={title} body={body} userId={userId} />
			))}
			{count > limit && (
				<Pagination count={count} setOffset={setOffset} limit={limit} offset={offset} />
			)}
			<Preloader isShow={isLoading} />
		</div>
	)
})

export default MainPosts
