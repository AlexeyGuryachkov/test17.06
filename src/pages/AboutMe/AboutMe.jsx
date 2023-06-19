import React, { memo } from 'react'

import UserInfo from '../UserPage/UserInfo/UserInfo'

import './AboutMe.scss'

const AboutMe = memo(() => (
	<div className="about-me">
		<UserInfo myCard />
		<div className="about-me__text">
			<h4 className="title">Желаемая должность</h4>
			<p className="text">Frontend-разработчик</p>
			<h4 className="title">Языки</h4>
			<p className="text">
				Русский язык
				<br /> Английский язык - B1
			</p>
			<h4 className="title">Стэк</h4>
			<p className="text">
				React, Redux, Redux Toolkit, Redux Saga. Также был опыт работы с NodeJS, MySQL, блокчейн.
				<br />
				Средства разработки: VSCode, Figma, Postman.
			</p>
			<h4 className="title">Опыт работы</h4>
			<p className="text">
				Июль 2020 — февраль 2023: <br />
				X-Technology, Калининград – Frontend Developer. Вёрстка и разработка логики приложений.
			</p>
			<h4 className="title">Проекты</h4>
			<p className="text">
				<h6 className="subtitle">Сайт компании X-Technology</h6>
				Разработка
				<a className="link" target="_blank" rel="noreferrer" href="https://x-technology.org/">
					сайта
				</a>
			</p>
			<p className="text">
				<h6 className="subtitle">"Админ ячейка разрез" </h6>
				Разработка внутреннего инструмента автоматизации и контроля для крупной горнодобывающей
				компании
			</p>
			<p className="text">
				<h6 className="subtitle">C2G blockchain platform</h6>
				Разработка системы контроля сотрудников и хода выполнения работ для компании Ctrl2go
			</p>
			<p className="text">
				<h6 className="subtitle">Платформа X-Cluster</h6>
				Разработка
				<a className="link" target="_blank" rel="noreferrer" href="https://x-cluster.com/">
					платформы для it-специалистов X-Cluster
				</a>
				. Разработка админ-панели для платформы X-Cluster
			</p>
			<p className="text">
				<h6 className="subtitle">Salair blockchain platform</h6>
				Разработка системы контроля сотрудников и хода выполнения работ для компании Салаир
			</p>
			<h4>Предыдущая карьера</h4>
			<p>
				Январь 2019 — июль 2020: <br />
				Индивидуальное предпринимательство/частная практика/фриланс, Калининград - Барбер
			</p>
			<p>
				Август 2018 — январь 2020: <br />
				Кофейня GS-coffeeshop, Калининград - Операционный управляющий сетью
			</p>
			<p>
				Сентябрь 2017 — август 2018: <br />
				Кофейня GS-coffeeshop, Калининград - Бариста
			</p>
			<h4 className="title">Образование</h4>
			<p className="text">
				Неоконченное высшее образование: 2011-2013, Балтийский федеральный университет им. И. Канта,
				Калининград
				<br /> Факультет информатики и прикладной математики
				<br /> Математическое обеспечение и администрирование информационных систем
				(математик-программист)
			</p>
		</div>
	</div>
))

export default AboutMe
