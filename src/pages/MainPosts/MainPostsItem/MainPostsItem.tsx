import { FC, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'

import MainPostsComments from './MainPostsComments/MainPostsComments'
import Avatar from '../../../components/Avatar/Avatar'

import { requestComments } from '../../../store/reducers/posts/postReducer'

import './MainPostsItem.scss'

const MainPostsItem: FC<Props> = memo(({ id, title, body, userId }) => {
	const [isCommentsShow, setIsCommentsShow] = useState<boolean>(false)

	const dispatch = useDispatch()

	const getPostComments = () => {
		dispatch<any>(requestComments({ postId: id }))
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
			<MainPostsComments id={id} isShow={isCommentsShow} />
		</div>
	)
})

export default MainPostsItem
interface Props {
	id: number
	title: string
	body: string
	userId: number
}
