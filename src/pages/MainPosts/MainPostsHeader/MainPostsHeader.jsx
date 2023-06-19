import React, { memo } from 'react'
import { array, func, number } from 'prop-types'

import SearchInput from './SearchInput/SearchInput'
import Filters from './Filters/Filters'

import './MainPostsHeader.scss'

const MainPostsHeader = memo(({ allPosts, offset, limit, setPosts, setCount, setOffset }) => (
	<div className="main-posts-header">
		<SearchInput
			allPosts={allPosts}
			offset={offset}
			limit={limit}
			setPosts={setPosts}
			setCount={setCount}
			setOffset={setOffset}
		/>
		<Filters
			allPosts={allPosts}
			offset={offset}
			limit={limit}
			setPosts={setPosts}
			setOffset={setOffset}
		/>
	</div>
))

MainPostsHeader.defaultProps = {
	allPosts: [],
}

MainPostsHeader.propTypes = {
	allPosts: array,
	offset: number.isRequired,
	limit: number.isRequired,
	setPosts: func.isRequired,
	setCount: func.isRequired,
	setOffset: func.isRequired,
}

export default MainPostsHeader
