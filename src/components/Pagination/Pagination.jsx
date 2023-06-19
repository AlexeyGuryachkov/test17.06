import React, { memo, useEffect, useState } from 'react'
import { func, number } from 'prop-types'

import Pagination from 'react-bootstrap/Pagination'

import './Pagination.scss'

const Paginat = memo(({ count, setOffset, limit, offset }) => {
	const [pagesNumbers, setPagesNumbers] = useState([])
	const pagesCount = Math.ceil(count / limit) || 1

	const page = offset ? Math.ceil(offset / limit + 1) : 1

	const hadleLastPageClick = () => {
		const _offset = count - limit
		if (_offset % 10) {
			setOffset(_offset + (10 - (_offset % 10)))
		} else setOffset(_offset)
	}

	const prevPage = () => {
		if (page > 1) setOffset(offset - limit)
	}

	const nextPage = () => {
		if (page < pagesCount) setOffset(offset + limit)
	}

	const choosePage = (count) => () => {
		setOffset(count * limit - limit)
	}

	useEffect(() => {
		const _pagesNumbers = []
		for (let i = 2; i < pagesCount; i++) {
			_pagesNumbers.push(i)
		}

		if (page < 5) {
			_pagesNumbers.splice(4, _pagesNumbers.length)
			setPagesNumbers(_pagesNumbers)
		}

		if (page > 4 && page < pagesCount - 3) {
			setPagesNumbers([page - 1, page, page + 1])
		}

		if (page > pagesCount - 4) {
			_pagesNumbers.splice(0, _pagesNumbers.length - 4)
			setPagesNumbers(_pagesNumbers)
		}
	}, [setPagesNumbers, page, pagesCount])

	return (
		<div className="pagination-wrapper">
			<Pagination>
				<Pagination.Prev disabled={page === 1} onClick={prevPage} />
				<Pagination.Item active={page === 1} onClick={() => setOffset(0)}>
					1
				</Pagination.Item>
				{page > 4 && <Pagination.Ellipsis />}
				{pagesNumbers.map((num) => {
					return (
						<Pagination.Item key={num} active={num === page} onClick={choosePage(num)}>
							{num}
						</Pagination.Item>
					)
				})}
				{page < pagesCount - 3 && <Pagination.Ellipsis />}
				<Pagination.Item active={page === pagesCount} onClick={hadleLastPageClick}>
					{pagesCount}
				</Pagination.Item>
				<Pagination.Next disabled={page === pagesCount} onClick={nextPage} />
			</Pagination>
		</div>
	)
})

Paginat.propTypes = {
	count: number.isRequired,
	setOffset: func.isRequired,
	limit: number.isRequired,
	offset: number.isRequired,
}

export default Paginat
