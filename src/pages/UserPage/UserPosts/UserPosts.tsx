import { FC } from 'react'
import { useSelector } from 'react-redux'

import MainPostsItem from '../../MainPosts/MainPostsItem/MainPostsItem'

import { getUsersPosts } from '../../../store/reducers/user/userSelectors'

import { getRandomId } from '../../../functions'

import { IPost } from '../../../store/reducers/posts/types'

const UserPosts: FC = () => {
	const posts = useSelector(getUsersPosts)

	return (
		<div className="user-posts">
			{posts?.map(({ title, body, id, userId }: IPost) => (
				<MainPostsItem key={getRandomId()} id={id} title={title} body={body} userId={userId} />
			))}
		</div>
	)
}

export default UserPosts
