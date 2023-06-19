import React, { memo } from 'react'
import { array, number, bool } from 'prop-types'
import cn from 'classnames'

import ListGroup from 'react-bootstrap/ListGroup'

import { getRandomId } from '../../../../functions'

import './MainPostsComments.scss'

const MainPostsComments = memo(({ comments, id, isShow }) => (
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

MainPostsComments.propTypes = {
	comments: array.isRequired,
	id: number.isRequired,
	isShow: bool.isRequired,
}

export default MainPostsComments
