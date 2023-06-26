import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { number, string } from 'prop-types'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'

import MainPostsComments from './MainPostsComments/MainPostsComments'
import Avatar from '../../../components/Avatar/Avatar'

import { requestComments } from '../../../store/reducers/posts/postReducer'

import { getCommentsList } from '../../../store/reducers/posts/postSelectors'

import './MainPostsItem.scss'

const MainPostsItem = memo(({ id, title, body, userId }) => {
	const [isCommentsShow, setIsCommentsShow] = useState(false)

	const dispatch = useDispatch()
	const comments = useSelector(getCommentsList)

	const getPostComments =
		({ id }) =>
		() => {
			if (!comments.map(({ postId }) => postId).includes(id)) {
				dispatch(requestComments({ postId: id }))
			}
			setIsCommentsShow(!isCommentsShow)
		}

	return (
		<div className="main-posts__item">
			<div className="post-wrapper">
				<NavLink to={`/user-page/${userId}?`} className="main-posts__avatar">
					<Avatar />
				</NavLink>

				<Card>
					<Card.Body>
						<Card.Title>
							<div className="title-wrapper">
								<NavLink to={`/user-page/${userId}?`} className="main-posts__avatar-mobile">
									<Avatar />
								</NavLink>
								{title}
							</div>
						</Card.Title>
						<Card.Text>{body}</Card.Text>
						<Button variant="primary" onClick={getPostComments({ id })}>
							{isCommentsShow ? 'Скрыть комментарии' : 'Показать комментарии'}
						</Button>
					</Card.Body>
				</Card>
			</div>
			<MainPostsComments comments={comments} id={id} isShow={isCommentsShow} />
		</div>
	)
})

MainPostsItem.propTypes = {
	id: number.isRequired,
	title: string.isRequired,
	body: string.isRequired,
	userId: number.isRequired,
}

export default MainPostsItem
