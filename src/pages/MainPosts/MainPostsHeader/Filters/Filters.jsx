import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { array, func, number } from 'prop-types'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import { getPosts } from '../../../../store/reducers/posts/postReducer'

import './Filters.scss'

const Filters = memo(({ allPosts, offset, limit, setPosts, setOffset }) => {
	const [sort, setSort] = useState('')
	const dispatch = useDispatch()

	const ascendingSort = () => {
		allPosts.sort((a, b) => {
			if (a.title[0].toLowerCase() > b.title[0].toLowerCase()) {
				return 1
			}
			if (a.title[0].toLowerCase() < b.title[0].toLowerCase()) {
				return -1
			}
			return 0
		})
		setPosts(allPosts.slice(offset, limit + offset))
		setOffset(0)
		setSort(': A-Z')
	}
	const descendingSort = () => {
		allPosts.sort((a, b) => {
			if (a.title[0].toLowerCase() < b.title[0].toLowerCase()) {
				return 1
			}
			if (a.title[0].toLowerCase() > b.title[0].toLowerCase()) {
				return -1
			}
			return 0
		})
		setPosts(allPosts.slice(offset, limit + offset))
		setOffset(0)
		setSort(': Z-A')
	}

	const unsort = () => {
		dispatch(getPosts())
		setPosts(allPosts.slice(offset, limit + offset))
		setSort('')
	}

	return (
		<div className="header-filters">
			<DropdownButton id="dropdown-basic-button" title={`Сортировка${sort}`}>
				<Dropdown.Item onClick={ascendingSort}>A-Z</Dropdown.Item>
				<Dropdown.Item onClick={descendingSort}>Z-A</Dropdown.Item>
				<Dropdown.Item onClick={unsort}>Сбросить</Dropdown.Item>
			</DropdownButton>
		</div>
	)
})

Filters.propTypes = {
	allPosts: array.isRequired,
	offset: number.isRequired,
	limit: number.isRequired,
	setPosts: func.isRequired,
	setOffset: func.isRequired,
}

export default Filters
