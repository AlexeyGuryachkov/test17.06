import React, { memo, useEffect, useState } from 'react'
import { array, func, number } from 'prop-types'

import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import CloseButton from 'react-bootstrap/CloseButton'

import './SearchInput.scss'

const SearchInput = memo(({ allPosts, offset, limit, setPosts, setCount, setOffset }) => {
	const [text, setText] = useState('')

	const clearValue = () => {
		setText('')
		setCount(allPosts.length)
		setOffset(0)
	}

	const handleKeyDown = () => {
		setOffset(0)
	}

	useEffect(() => {
		if (text.length) {
			const arr = []
			allPosts.forEach((post) => {
				const { title } = post
				if (title.includes(text)) {
					arr.push(post)
					setCount(arr.length)
					setPosts(arr.slice(offset, limit + offset))
				}
			})
			if (
				!allPosts
					.map((item) => item.title)
					.join()
					.includes(text)
			) {
				setPosts([])
				setCount(0)
			}
		} else {
			/*сетаю посты лишь тут, потому что иначе при работе поиска 
			некорретно отрабатывает пагинация*/
			setPosts(allPosts.slice(offset, limit + offset))
		}
	}, [allPosts, text, offset, limit, setPosts, setCount])

	return (
		<div className="search-input-wrapper">
			<FloatingLabel controlId="floatingInput" label="Поиск по заголовку" className="mb-3">
				<Form.Control
					className="search-input"
					type="text"
					placeholder="поиск по заголовку"
					value={text}
					onChange={({ target: { value } }) => setText(value)}
					onKeyDown={handleKeyDown}
				/>
			</FloatingLabel>
			<CloseButton onClick={clearValue} className={text && 'active'} />
		</div>
	)
})

SearchInput.propTypes = {
	allPosts: array.isRequired,
	offset: number.isRequired,
	limit: number.isRequired,
	setPosts: func.isRequired,
	setCount: func.isRequired,
	setOffset: func.isRequired,
}

export default SearchInput
