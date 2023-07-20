import { useState, FC } from 'react'
import { useDispatch } from 'react-redux'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import { setFilters } from '../../../../store/reducers/posts/postReducer'

import { getRandomId } from '../../../../functions'

import './Filters.scss'

const Filters: FC = () => {
	const [sort, setSort] = useState<string>('')
	const dispatch = useDispatch()

	interface sortFilterItem {
		title: string
		value: string
	}

	const fiters: sortFilterItem[] = [
		{ title: 'A-Z', value: 'asc' },
		{ title: 'Z-A', value: 'desc' },
		{ title: 'Сбросить', value: '' },
	]

	const handleSetFilters = (item: sortFilterItem) => () => {
		if (item.value) {
			dispatch<any>(setFilters({ sortOrder: item.value, sortBy: 'title' }))
			setSort(item.title)
		} else {
			dispatch<any>(setFilters({ sortOrder: item.value, sortBy: '' }))
			setSort('')
		}
	}

	return (
		<div className="header-filters">
			<DropdownButton id="dropdown-basic-button" title={`Сортировка ${sort}`}>
				{fiters.map((item) => (
					<Dropdown.Item key={getRandomId()} onClick={handleSetFilters(item)}>
						{item.title}
					</Dropdown.Item>
				))}
			</DropdownButton>
		</div>
	)
}

export default Filters
