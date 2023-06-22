import React, { memo, useEffect, useState } from 'react'
import { func } from 'prop-types'

import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import CloseButton from 'react-bootstrap/CloseButton'

import './SearchInput.scss'
import { useDispatch } from 'react-redux'

const SearchInput = memo(({ setFilters }) => {
	const [text, setText] = useState('')

	const dispatch = useDispatch()

	const clearValue = () => {
		setText('')
		dispatch(setFilters({ filters: { page: 1 } }))
	}

	useEffect(() => {
		dispatch(setFilters({ filters: { searchText: text, page: 1 } }))
	}, [dispatch, text, setFilters])

	return (
		<div className="search-input-wrapper">
			<FloatingLabel controlId="floatingInput" label="Поиск по заголовку" className="mb-3">
				<Form.Control
					className="search-input"
					type="text"
					placeholder="поиск по заголовку"
					value={text}
					onChange={({ target: { value } }) => setText(value)}
				/>
			</FloatingLabel>
			<CloseButton onClick={clearValue} className={text && 'active'} />
		</div>
	)
})

SearchInput.propTypes = {
	setFilters: func.isRequired,
}

export default SearchInput
