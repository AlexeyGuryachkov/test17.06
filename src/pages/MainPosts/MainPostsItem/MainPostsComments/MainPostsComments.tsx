import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'

import ListGroup from 'react-bootstrap/ListGroup'

import Preloader from '../../../../components/Preloader/Preloader'

import {
	getCommentsList,
	getIsCommentsLoading,
} from '../../../../store/reducers/posts/postSelectors'

import { IComment } from '../../../../store/reducers/posts/types'

import { getRandomId } from '../../../../functions'

import './MainPostsComments.scss'

const MainPostsComments: FC<Props> = memo(({ id, isShow }) => {
	const comments = useSelector(getCommentsList)
	const isLoading = useSelector(getIsCommentsLoading)

	return (
		<div className={cn('main-posts__comments', { show: isShow })}>
			<ListGroup as="ol">
				{comments?.map(({ postId, email, body }: IComment) => (
					<div key={getRandomId()} className="comments-item">
						{postId === id && (
							<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto">
									<div className="fw-bold">{email}</div>
									{body}
								</div>
							</ListGroup.Item>
						)}
					</div>
				))}
			</ListGroup>
			<Preloader isShow={isLoading} />
		</div>
	)
})

interface Props {
	id: number
	isShow: boolean
}

export default MainPostsComments
