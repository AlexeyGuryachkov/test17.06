import React, { memo } from 'react'
import { array, number, bool } from 'prop-types'
import cn from 'classnames'

import ListGroup from 'react-bootstrap/ListGroup'

import './MainPostsComments.scss'

const MainPostsComments = memo(({ comments, id, isShow }) => {
	return (
		<div className={cn('main-posts__comments', { show: isShow })}>
			<ListGroup as="ol" style={{ width: '70.5rem' }}>
				{comments?.map(({ postId, id: commentId, email, body }) => (
					<div key={commentId + email} className="comments-item">
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
	)
})

MainPostsComments.propTypes = {
	comments: array.isRequired,
	id: number.isRequired,
	isShow: bool.isRequired,
}

export default MainPostsComments
