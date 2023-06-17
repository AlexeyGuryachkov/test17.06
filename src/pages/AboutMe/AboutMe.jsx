import React, { memo } from 'react'

import UserInfo from '../UserPage/UserInfo/UserInfo'

const AboutMe = memo(() => (
	<div className="about-me">
		<UserInfo myCard />
	</div>
))

export default AboutMe
