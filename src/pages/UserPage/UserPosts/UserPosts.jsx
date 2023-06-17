import React, { memo } from 'react'

import MainPostsItem from '../../MainPosts/MainPostsItem/MainPostsItem'

import { getRandomId } from '../../../functions'

const UserPosts = memo(() => {
	/* MOCK */
	const posts = [
		{
			userId: 1,
			id: 1,
			title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
		},
		{
			userId: 1,
			id: 2,
			title: 'qui est esse',
			body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
		},
	]

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
