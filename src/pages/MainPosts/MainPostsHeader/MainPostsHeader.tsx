import { FC } from 'react'

import SearchInput from './SearchInput/SearchInput'
import Filters from './Filters/Filters'

import './MainPostsHeader.scss'

const MainPostsHeader: FC = () => (
	<div className="main-posts-header">
		<SearchInput />
		<Filters />
	</div>
)

export default MainPostsHeader
