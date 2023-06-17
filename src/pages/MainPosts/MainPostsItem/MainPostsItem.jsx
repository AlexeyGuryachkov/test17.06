import React, { memo, useState } from 'react'
import { string, number } from 'prop-types'

import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import MainPostsComments from './MainPostsComments/MainPostsComments'

import Avatar from '../../../components/Avatar/Avatar'

import './MainPostsItem.scss'

const MainPostsItem = memo(({ id, title, body, userId }) => {
	const [isCommentsShow, setIsCommentsShow] = useState(false)

	/* MOCK */
	const comments = [
		{
			postId: 1,
			id: 1,
			name: 'id labore ex et quam laborum',
			email: 'Eliseo@gardner.biz',
			body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
		},
		{
			postId: 2,
			id: 2,
			name: 'quo vero reiciendis velit similique earum',
			email: 'Jayne_Kuhic@sydney.com',
			body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
		},
	]

	/*функция показать/скрыть комментарии. Замыкаю для лучшей, на мой взгляд, читаемости разметки*/
	const getPostComments = () => setIsCommentsShow(!isCommentsShow)

	return (
		<div className="main-posts__item">
			<div className="post-wrapper">
				<NavLink to={`/user-page/${userId}?`}>
					<Avatar />
				</NavLink>

				<Card style={{ width: '60rem' }}>
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{body}</Card.Text>
						<Button variant="primary" onClick={getPostComments}>
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
