import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { func } from 'prop-types'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import { getRandomId } from '../../../../functions'

import './Filters.scss'

const Filters = memo(({ setFilters }) => {
	const [sort, setSort] = useState('')
	const dispatch = useDispatch()

	const fiters = [
		{ title: 'A-Z', value: 'asc' },
		{ title: 'Z-A', value: 'desc' },
		{ title: 'Сбросить', value: '' },
	]

	const handleSetFilters = (item) => () => {
		if (item.value) {
			dispatch(setFilters({ filters: { sortOrder: item.value, sortBy: 'title' } }))
			setSort(item.title)
		} else {
			dispatch(setFilters({ filters: { sortOrder: item.value, sortBy: '' } }))
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

Filters.propTypes = {
	setFilters: func.isRequired,
}

export default Filters
