import { RootState } from '../../store'

export const getPostsList = ({ postsPage: { posts } }: RootState) => posts
export const getCommentsList = ({ postsPage: { comments } }: RootState) => comments
export const getIsLoading = ({ postsPage: { isLoading } }: RootState) => isLoading
export const getPostsCount = ({ postsPage: { count } }: RootState) => count
export const getPostsFilters = ({ postsPage: { filters } }: RootState) => filters
