import React, { memo } from 'react'
import { bool } from 'prop-types'

import ListGroup from 'react-bootstrap/ListGroup'

import Avatar from '../../../components/Avatar/Avatar'

import myAvatar from '../../../assets/media/my-avatar.jpg'

import './UserInfo.scss'

const UserInfo = memo(({ myCard }) => {
	/*MOCK*/
	const userData = {
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

	/*about me mock*/
	const myData = {
		address: {},
		company: {},
		name: 'Алексей Гурячков',
		email: 'alexey.guryachkov@gmail.com',
		phone: '+79114965936',
		avatar: myAvatar,
	}

	/* about me or user page*/
	const user = myCard ? myData : userData

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

UserInfo.defaultProps = {
	myCard: false,
}

UserInfo.propTypes = {
	myCard: bool,
}

export default UserInfo
