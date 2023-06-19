import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import MainPostsItem from '../../MainPosts/MainPostsItem/MainPostsItem'

import { getUsersPosts } from '../../../store/reducers/users/usersSelectors'

import { getRandomId } from '../../../functions'

const UserPosts = memo(() => {
	const posts = useSelector(getUsersPosts)

	return (
		<div className="user-posts">
			{posts?.map(({ title, body, id, userId }) => (
				<MainPostsItem
					key={getRandomId()}
					id={id}
					title={title}
					body={body}
					userId={userId}
					userPage
				/>
			))}
		</div>
	)
})

export default UserPosts
