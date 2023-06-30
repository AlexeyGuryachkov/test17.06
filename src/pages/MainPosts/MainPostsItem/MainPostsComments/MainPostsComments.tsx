import React, { FC, memo } from 'react'
import cn from 'classnames'

import ListGroup from 'react-bootstrap/ListGroup'

import { getRandomId } from '../../../../functions'

import { IComment } from '../../../../types/types'

import './MainPostsComments.scss'

interface commentsProps {
	comments: IComment[]
	id: number
	isShow: boolean
}

const MainPostsComments: FC<commentsProps> = memo(({ comments, id, isShow }) => (
	<div className={cn('main-posts__comments', { show: isShow })}>
		<ListGroup as="ol">
			{comments?.map(({ postId, email, body }) => (
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
	</div>
))

export default MainPostsComments
