const defaultState = {
	user: {},
	userPosts: [],
	isLoading: false,
}

/* actions */
export const SET_USER = 'SET_USER'
export const ASYNC_SET_USER = 'ASYNC_SET_USER'
export const SET_USER_POSTS = 'SET_USER_POSTS'
export const ASYNC_SET_USER_POSTS = 'ASYNC_SET_USER_POSTS'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const RESET_USER_DATA = 'RESET_USER_DATA'

/* reducer */
export default function userById(state = defaultState, action) {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.payload.user }
		case SET_IS_LOADING:
			return { ...state, isLoading: action.payload.isLoading }
		case SET_USER_POSTS:
			return { ...state, userPosts: action.payload.userPosts }
		default:
			return state
	}
}

/*action creators */
export const setUserById = ({ user }) => ({ type: SET_USER, payload: { user } })
export const getUserById = ({ userId }) => ({ type: ASYNC_SET_USER, payload: { userId } })
export const setUserPosts = ({ userPosts }) => ({ type: SET_USER_POSTS, payload: { userPosts } })
export const getUserPosts = ({ userId }) => ({ type: ASYNC_SET_USER_POSTS, payload: { userId } })
export const setIsLoading = ({ isLoading }) => ({ type: SET_IS_LOADING, payload: { isLoading } })
export const resetUserData = () => ({ type: RESET_USER_DATA })
