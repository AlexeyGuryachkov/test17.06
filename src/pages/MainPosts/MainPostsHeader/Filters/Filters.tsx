import { memo, useState, FC } from 'react'
import { useDispatch } from 'react-redux'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import { getRandomId } from '../../../../functions'

import { IPostFilters } from '../../../../store/reducers/posts/types'

import './Filters.scss'

const Filters: FC<Props> = memo(({ setFilters }) => {
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
})

interface Props {
	setFilters: (filters: IPostFilters) => void
}

export default Filters
