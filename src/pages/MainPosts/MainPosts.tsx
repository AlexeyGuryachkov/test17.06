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

import { IPostFilters, IPost } from '../../store/reducers/posts/types'

import { getRandomId } from '../../functions'

import './MainPosts.scss'

const MainPosts = memo(() => {
	const count = useSelector(getPostsCount)
	const posts: IPost[] = useSelector(getPostsList)
	const isLoading: boolean = useSelector(getIsLoading)
	const filters: IPostFilters = useSelector(getPostsFilters)

	const dispatch = useDispatch()

	const { limit, page } = filters

	const setPage = (page: number): void => dispatch<any>(setFilters({ page }))

	useEffect(() => {
		dispatch<any>(requestPosts({ filters }))
	}, [dispatch, filters])

	useEffect(
		() => () => {
			dispatch<any>(resetPostsState())
		},
		[dispatch]
	)

	return (
		<div className="main-posts">
			<MainPostsHeader setFilters={setFilters} />
			{posts.map(({ title, body, id, userId }) => (
				<MainPostsItem key={getRandomId()} id={id} title={title} body={body} userId={userId} />
			))}
			{limit && page && count > limit && (
				<Pagination setPage={setPage} count={count} limit={limit} page={page} />
			)}
			<Preloader isShow={isLoading} />
		</div>
	)
})

export default MainPosts
