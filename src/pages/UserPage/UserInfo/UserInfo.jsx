import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { bool } from 'prop-types'

import ListGroup from 'react-bootstrap/ListGroup'

import Avatar from '../../../components/Avatar/Avatar'

import { getUserData } from '../../../store/reducers/user/userSelectors'

import myAvatar from '../../../assets/media/my-avatar.jpg'

import './UserInfo.scss'

const UserInfo = memo(({ myCard }) => {
	/*about me mock*/
	const myData = {
		address: {},
		company: {},
		name: 'Алексей Гурячков',
		birthday: '11.09.1990',
		email: 'alexey.guryachkov@gmail.com',
		phone: '+79114965936',
		avatar: myAvatar,
		telegram: '@aguryachkov',
	}

	const userData = useSelector(getUserData)

	const user = myCard ? myData : userData

	const { name, email, phone, avatar, birthday, telegram } = user

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
				{birthday && (
					<ListGroup className="my-2" horizontal>
						<ListGroup.Item className="title">
							<div className="fw-bold">Дата рождения</div>
						</ListGroup.Item>
						<ListGroup.Item className="cell">{birthday}</ListGroup.Item>
					</ListGroup>
				)}
				{telegram && (
					<ListGroup className="my-2" horizontal>
						<ListGroup.Item className="title">
							<div className="fw-bold">Telegram</div>
						</ListGroup.Item>
						<ListGroup.Item className="cell">{telegram}</ListGroup.Item>
					</ListGroup>
				)}
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
