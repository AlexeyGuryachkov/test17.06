import React, { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import CloseButton from 'react-bootstrap/CloseButton'

import { getPostsFilters } from '../../../../store/reducers/posts/postSelectors'

import { IPostFilters } from '../../../../store/reducers/posts/types'

import './SearchInput.scss'

const SearchInput: FC<Props> = memo(({ setFilters }) => {
	const { searchText }: IPostFilters = useSelector(getPostsFilters)

	const dispatch = useDispatch()

	const handleSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		dispatch<any>(setFilters({ searchText: value, page: 1 }))
	}

	const clearValue = () => {
		dispatch<any>(setFilters({ searchText: '', page: 1 }))
	}

	return (
		<div className="search-input-wrapper">
			<FloatingLabel controlId="floatingInput" label="Поиск по заголовку" className="mb-3">
				<Form.Control
					className="search-input"
					type="text"
					placeholder="поиск по заголовку"
					value={searchText}
					onChange={handleSearch}
				/>
			</FloatingLabel>
			<CloseButton onClick={clearValue} className={searchText && 'active'} />
		</div>
	)
})

interface Props {
	setFilters: (filters: IPostFilters) => void
}

export default SearchInput
