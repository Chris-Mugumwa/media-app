import React, { useState } from 'react'
import './navigation.scss'
import './menu.scss'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../auth/login/Login'
import Signup from '../auth/signup/Signup'
import { ReactComponent as Icon } from '../../assets/icon.svg'
import NavigationSignout from './NavigationSignout'
import { auth } from '../../firebase'
import Avatar from 'react-avatar'
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5'
import { navigationData } from '../../data/reusableData'
import { motion } from 'framer-motion'

function Navigation() {
	const navigate = useNavigate()
	const user = auth?.currentUser
	const [menu, setMenu] = useState(false)
	const [links] = useState(navigationData)
	const [openLogin, setOpenLogin] = useState(false)
	const [openSignup, setOpenSignup] = useState(false)
	const [openSignout, setOpenSignout] = useState(false)

	const showMenu = () => {
		setMenu(prevState => !prevState)
	}

	const showSignout = () => {
		setOpenSignout(prevState => !prevState)
	}

	const toLogin = () => {
		setMenu(false)
		setOpenLogin(true)
	}

	const toSignup = () => {
		setMenu(false)
		setOpenSignup(true)
	}

	const toSignout = () => {
		setMenu(false)
		auth.signOut()
	}

	return (
		<div className='navigation'>
			<Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
			<Signup openSignup={openSignup} setOpenSignup={setOpenSignup} />
			<NavigationSignout
				openSignout={openSignout}
				setOpenSignout={setOpenSignout}
				toSignout={toSignout}
			/>

			<Icon
				alt='application icon'
				className='navigation__icon'
				onClick={() => navigate('/')}
			/>

			<div
				className='navigation__hamburger-container'
				onClick={() => showMenu()}>
				<IoMenuOutline className='navigation__hamburger navigation__hamburger-close' />
			</div>

			{user ? (
				<div className='navigation__wrapper'>
					<h5 className='navigation__name'>{user?.displayName}</h5>
					<div className='navigation__profile'>
						{user?.photoURL !== null ? (
							<img
								src={user?.photoURL}
								alt='profile'
								className='navigation__profile--picture'
								onClick={() => showSignout()}
							/>
						) : (
							<Avatar
								color={Avatar.getRandomColor('sitebase', [
									'red',
									'green',
									'blue',
								])}
								name={user?.displayName}
								round='100%'
								size='40px'
								className='navigation__avatar'
								onClick={() => showSignout()}
							/>
						)}
					</div>
				</div>
			) : (
				<>
					<div className='navigation__buttons'>
						<button
							className='navigation__button navigation__login'
							onClick={() => toLogin()}>
							Login
						</button>
						<button
							className='navigation__button navigation__sign-in'
							onClick={() => toSignup()}>
							Sign Up
						</button>
					</div>
				</>
			)}

			<div className={menu ? 'menu__close' : 'menu'}>
				<motion.div
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					className='menu__profile-container'>
					{user ? (
						<>
							<div className='menu__profile'>
								{user?.photoURL !== null ? (
									<img
										src={user?.photoURL}
										alt='profile'
										className='menu__profile--picture'
									/>
								) : (
									<Avatar
										color={Avatar.getRandomColor('sitebase', [
											'red',
											'green',
											'blue',
										])}
										name={user?.displayName}
										round='100%'
										size='40px'
										className='menu__avatar'
									/>
								)}
								<h5 className='menu__name'>{user?.displayName}</h5>
							</div>
						</>
					) : (
						<Avatar
							color={Avatar.getRandomColor('sitebase', [
								'red',
								'green',
								'blue',
							])}
							name='User'
							round='100%'
							size='40px'
							className='menu__avatar'
						/>
					)}
					<div
						className='menu__hamburger-container'
						onClick={() => showMenu()}>
						<IoCloseOutline className='menu__hamburger navigation__hamburger-close' />
					</div>
				</motion.div>
				<ul className='menu__list'>
					{links.map(link => (
						<div className='menu__item-container' key={link.id}>
							<Link
								className='menu__item'
								to={link.path}
								onClick={() => setMenu(false)}>
								<span className='menu__icon'>{link.icon}</span>
								<span className='menu__name'>{link.name}</span>
							</Link>
						</div>
					))}
				</ul>

				{user ? (
					<div className='menu__buttons'>
						<button
							className='menu__button menu__login'
							onClick={() => toSignout()}>
							Logout
						</button>
					</div>
				) : (
					<div className='menu__buttons'>
						<button
							className='menu__button menu__login'
							onClick={() => toLogin()}>
							Login
						</button>
						<button
							className='menu__button menu__sign-up'
							onClick={() => toSignup()}>
							Sign Up
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navigation
