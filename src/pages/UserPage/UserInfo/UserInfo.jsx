import React, { memo } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'

import Avatar from '../../../components/Avatar/Avatar'

import './UserInfo.scss'

const UserInfo = memo(() => {
	const user = {
		id: 1,
		name: 'Leanne Graham',
		username: 'Bret',
		email: 'Sincere@april.biz',
		address: {
			street: 'Kulas Light',
			suite: 'Apt. 556',
			city: 'Gwenborough',
			zipcode: '92998-3874',
			geo: {
				lat: '-37.3159',
				lng: '81.1496',
			},
		},
		phone: '1-770-736-8031 x56442',
		website: 'hildegard.org',
		company: {
			name: 'Romaguera-Crona',
			catchPhrase: 'Multi-layered client-server neural-net',
			bs: 'harness real-time e-markets',
		},
	}

	const { name, email, phone, avatar } = user

	return (
		<div className="user-info">
			<Avatar size="big" img={avatar} />
			<div className="user-info__card">
				<ListGroup className="my-2" horizontal>
					<ListGroup.Item className="title">
						<div className="fw-bold">Имя</div>
					</ListGroup.Item>
					<ListGroup.Item className="cell">{name}</ListGroup.Item>
				</ListGroup>
				<ListGroup className="my-2" horizontal>
					<ListGroup.Item className="title">
						<div className="fw-bold">Почта</div>
					</ListGroup.Item>
					<ListGroup.Item className="cell">{email}</ListGroup.Item>
				</ListGroup>
				<ListGroup className="my-2" horizontal>
					<ListGroup.Item className="title">
						<div className="fw-bold">Телефон</div>
					</ListGroup.Item>
					<ListGroup.Item className="cell">{phone}</ListGroup.Item>
				</ListGroup>
			</div>
		</div>
	)
})

export default UserInfo
