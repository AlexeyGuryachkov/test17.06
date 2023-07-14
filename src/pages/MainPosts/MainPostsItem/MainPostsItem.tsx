import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'

import MainPostsComments from './MainPostsComments/MainPostsComments'
import Avatar from '../../../components/Avatar/Avatar'

import { requestComments, setShowComments } from '../../../store/reducers/posts/postReducer'

import { getCommentsList, getShowComments } from '../../../store/reducers/posts/postSelectors'

import { IComment } from '../../../store/reducers/posts/types'

import './MainPostsItem.scss'

const MainPostsItem: FC<Props> = ({ id, title, body, userId }) => {
	const [isCommentsShow, setIsCommentsShow] = useState<boolean>(false)

	const dispatch = useDispatch()
	const comments = useSelector(getCommentsList)
	const showComments = useSelector(getShowComments)

	const getPostComments = () => {
		if (!comments.map(({ postId }: IComment) => postId).includes(id)) {
			dispatch<any>(requestComments({ postId: id }))
		}
		dispatch<any>(setShowComments(id))
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
						<Button variant="primary" onClick={getPostComments}>
							{isCommentsShow ? 'Скрыть комментарии' : 'Показать комментарии'}
						</Button>
					</Card.Body>
				</Card>
			</div>
			<MainPostsComments comments={comments} id={id} isShow={showComments.includes(id)} />
		</div>
	)
}

export default MainPostsItem
interface Props {
	id: number
	title: string
	body: string
	userId: number
}
