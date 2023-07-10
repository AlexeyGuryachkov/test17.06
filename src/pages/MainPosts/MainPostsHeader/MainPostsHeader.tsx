import React, { memo, FC } from 'react'

import SearchInput from './SearchInput/SearchInput'
import Filters from './Filters/Filters'

import { IPostFilters } from '../../../store/reducers/posts/types'

import './MainPostsHeader.scss'

const MainPostsHeader: FC<Props> = memo(({ setFilters }) => (
	<div className="main-posts-header">
		<SearchInput setFilters={setFilters} />
		<Filters setFilters={setFilters} />
	</div>
))

interface Props {
	setFilters: (filters: IPostFilters) => void
}

export default MainPostsHeader
