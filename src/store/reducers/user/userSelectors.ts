import { RootState } from '../../store'

export const getUserData = ({ userPage: { user } }: RootState) => user
export const getUsersPosts = ({ userPage: { userPosts } }: RootState) => userPosts
export const getIsLoading = ({ userPage: { isLoading } }: RootState) => isLoading
