import axios from 'axios'

export const url = process.env.REACT_APP_HTTP_URL

const instance = axios.create({
	baseURL: url,
	headers: {
		Authorization: '',
	},
})

export default instance
