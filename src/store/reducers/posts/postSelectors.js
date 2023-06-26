export const getPostsList = ({ postsPage: { posts } }) => posts
export const getCommentsList = ({ postsPage: { comments } }) => comments
export const getIsLoading = ({ postsPage: { isLoading } }) => isLoading
export const getPostsCount = ({ postsPage: { count } }) => count
export const getPostsFilters = ({ postsPage: { filters } }) => filters
