import { FC, memo } from 'react'

import PagesRouter from '../PagesRouter/PagesRouter'

import './PageContainer.scss'

const PageContainer: FC = memo(() => (
	<div className="pageContainer">
		<PagesRouter />
	</div>
))

export default PageContainer
