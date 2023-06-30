import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MainPostsHeader from './MainPostsHeader/MainPostsHeader'
import MainPostsItem from './MainPostsItem/MainPostsItem'
import Pagination from '../../components/Pagination/Pagination'
import Preloader from '../../components/Preloader/Preloader'

import { requestPosts, resetPostsState, setFilters } from '../../store/reducers/posts/postReducer'

import {
	getIsLoading,
	getPostsCount,
	getPostsFilters,
	getPostsList,
} from '../../store/reducers/posts/postSelectors'

import { getRandomId } from '../../functions'

const MainPosts = memo(() => {
	const count = useSelector(getPostsCount)
	const posts = useSelector(getPostsList)
	const isLoading = useSelector(getIsLoading)
	const filters = useSelector(getPostsFilters)

	const dispatch = useDispatch()

	const { limit, page } = filters

	const setPage = ({ page }) => dispatch(setFilters({ filters: { page } }))

	useEffect(() => {
		dispatch(requestPosts({ filters }))
	}, [dispatch, filters])

	useEffect(
		() => () => {
			dispatch(resetPostsState())
		},
		[dispatch]
	)

	console.log('render')

	return (
		<div className="main-posts">
			<MainPostsHeader setFilters={setFilters} />
			{posts.map(({ title, body, id, userId }) => (
				<MainPostsItem key={getRandomId()} id={id} title={title} body={body} userId={userId} />
			))}
			{count > limit && <Pagination setPage={setPage} count={count} limit={limit} page={page} />}
			<Preloader isShow={isLoading} />
		</div>
	)
})

export default MainPosts
