import React, { memo, useEffect, useState } from 'react'
import { func, number } from 'prop-types'

import Pagination from 'react-bootstrap/Pagination'

import './Pagination.scss'

const Paginat = memo(({ count, setOffset, limit, offset }) => {
	const [pagesNumbers, setPagesNumbers] = useState([])
	const pagesCount = Math.ceil(count / limit) || 1

	const page = offset ? offset / limit + 1 : 1

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
				{pagesNumbers.map((count) => {
					return (
						<Pagination.Item key={count} active={count === page} onClick={choosePage(count)}>
							{count}
						</Pagination.Item>
					)
				})}
				{page < pagesCount - 3 && <Pagination.Ellipsis />}
				<Pagination.Item active={page === pagesCount} onClick={() => setOffset(count - limit)}>
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
