import React, { memo } from 'react'

import PageContainer from './components/PageContainer/PageContainer'
import Header from './components/Header/Header'

import './assets/styles/index.scss'

const App = memo(() => {
	return (
		<div className="App">
			<Header />
			<PageContainer />
		</div>
	)
})

export default App
