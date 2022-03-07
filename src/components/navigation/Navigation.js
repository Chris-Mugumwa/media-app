import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'
import '../navigation/menu.scss'
import Login from '../auth/login/Login'
import Signup from '../auth/signup/Signup'
import { HiOutlineMenuAlt2, HiOutlineX } from 'react-icons/hi'
import { navigationData } from './navigationData'

function Navigation() {
	const [menu, setMenu] = useState(false)
	const [links, setLinks] = useState(navigationData)
	const [openLogin, setOpenLogin] = useState(false)
	const [openSignup, setOpenSignup] = useState(false)

	const showMenu = () => {
		setMenu(prevState => !prevState)
	}

	const toLogin = () => {
		setMenu(false)
		setOpenLogin(true)
		console.log('Modal Open')
	}

	const toSignup = () => {
		setMenu(false)
		setOpenSignup(true)
		console.log('Modal Open')
	}

	return (
		<div className='navigation'>
			<Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
			<Signup openSignup={openSignup} setOpenSignup={setOpenSignup} />
			<img
				src={process.env.PUBLIC_URL + 'assets/icon.svg'}
				alt='application icon'
				className='navigation__icon'
			/>

			<div
				className='navigation__hamburger-container'
				onClick={() => showMenu()}
			>
				{menu ? (
					<HiOutlineX className='navigation__hamburger navigation__hamburger-close' />
				) : (
					<HiOutlineMenuAlt2 className='navigation__hamburger navigation__hamburger-open' />
				)}
			</div>

			<div className='navigation__buttons'>
				<button
					className='navigation__button navigation__login'
					onClick={() => toLogin()}
				>
					Login
				</button>
				<button
					className='navigation__button navigation__sign-in'
					onClick={() => toSignup()}
				>
					Sign Up
				</button>
			</div>
			<div className={menu ? 'menu__close' : 'menu'}>
				<ul className='menu__list'>
					{links.map(link => (
						<div className='menu__item-container' key={link.id}>
							<Link
								className='menu__item'
								to={link.path}
								onClick={() => setMenu(false)}
							>
								<span className='menu__icon'>{link.icon}</span>
								<span className='menu__name'>{link.name}</span>
							</Link>
						</div>
					))}
				</ul>
				<div className='menu__buttons'>
					<button
						className='menu__button menu__login'
						onClick={() => toLogin()}
					>
						Login
					</button>
					<button
						className='menu__button menu__sign-up'
						onClick={() => toSignup()}
					>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navigation
