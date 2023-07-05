import { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import MainPostsItem from '../../MainPosts/MainPostsItem/MainPostsItem'

import { getUsersPosts } from '../../../store/reducers/user/userSelectors'

import { getRandomId } from '../../../functions'

import { IPost } from '../../../types/types'

const UserPosts: FC = memo(() => {
	const posts: IPost[] = useSelector(getUsersPosts)

	return (
		<div className="user-posts">
			{posts?.map(({ title, body, id, userId }: IPost) => (
				<MainPostsItem key={getRandomId()} id={id} title={title} body={body} userId={userId} />
			))}
		</div>
	)
})

export default UserPosts
