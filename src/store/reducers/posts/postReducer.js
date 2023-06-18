const defaultState = {
	posts: [],
	count: null,
	isLoading: false,
	comments: [],
}

/*actions*/
export const SET_POSTS = 'SET_POSTS'
export const ASYNC_SET_POSTS = 'ASYNC_SET_POSTS'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const RESET_POSTS = 'RESET_POSTS'
export const SET_COMMENTS = 'SET_COMMENTS'
export const ASYNC_SET_COMMENTS = 'ASYNC_SET_COMMENTS'

/*reducer*/
export default function posts(state = defaultState, action) {
	switch (action.type) {
		case SET_POSTS:
			return { ...state, posts: action.payload.posts, count: action.payload.posts.length }
		case SET_COMMENTS:
			return {
				...state,
				comments: [...state.comments, ...action.payload.comments],
			}
		case SET_IS_LOADING:
			return { ...state, isLoading: action.payload.isLoading }

		default:
			return state
	}
}

/*action creators*/
export const setPosts = ({ posts }) => ({ type: SET_POSTS, payload: { posts } })
export const setComments = ({ comments }) => ({
	type: SET_COMMENTS,
	payload: { comments },
})
export const setIsLoading = ({ isLoading }) => ({ type: SET_IS_LOADING, payload: { isLoading } })
export const getPosts = () => ({ type: ASYNC_SET_POSTS })
export const getComments = ({ postId }) => ({ type: ASYNC_SET_COMMENTS, payload: { postId } })
export const resetPosts = () => ({ type: RESET_POSTS })
