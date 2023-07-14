import PageContainer from './components/PageContainer/PageContainer'
import Header from './components/Header/Header'
import Notifications from './components/Notifications/Notifications'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/index.scss'

const App = () => (
	<div className="App">
		<Header />
		<PageContainer />
		<Notifications />
	</div>
)

export default App
