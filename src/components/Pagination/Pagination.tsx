import { FC, memo, useEffect, useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'

import './Pagination.scss'

const Paginat: FC<Props> = memo(({ count, setPage, limit, page }) => {
	const [pagesNumbers, setPagesNumbers] = useState<number[]>([])
	const pagesCount: number = Math.ceil(+count / limit) || 1

	const prevPage = () => {
		if (page > 1) setPage(page - 1)
	}

	const nextPage = () => {
		if (page < pagesCount) setPage(page + 1)
	}

	const choosePage = (count: number) => () => {
		setPage(count)
	}

	useEffect(() => {
		const _pagesNumbers: number[] = []
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
				<Pagination.Item active={page === 1} onClick={() => setPage(1)}>
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
				<Pagination.Item active={page === pagesCount} onClick={() => setPage(pagesCount)}>
					{pagesCount}
				</Pagination.Item>
				<Pagination.Next disabled={page === pagesCount} onClick={nextPage} />
			</Pagination>
		</div>
	)
})

interface Props {
	count: number
	setPage: (page: number) => void
	limit: number
	page: number
}

export default Paginat
