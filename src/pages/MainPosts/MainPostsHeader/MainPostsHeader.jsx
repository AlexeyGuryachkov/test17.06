import React, { memo } from 'react'
import { func } from 'prop-types'

import SearchInput from './SearchInput/SearchInput'
import Filters from './Filters/Filters'

import './MainPostsHeader.scss'

const MainPostsHeader = memo(({ setFilters }) => (
	<div className="main-posts-header">
		<SearchInput setFilters={setFilters} />
		<Filters setFilters={setFilters} />
	</div>
))

MainPostsHeader.propTypes = {
	setFilters: func.isRequired,
}

export default MainPostsHeader
