import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'
import './menu.scss'
import Login from '../auth/login/Login'
import Signup from '../auth/signup/Signup'
import { ReactComponent as Icon } from '../../assets/icon.svg'
import NavigationSignout from './NavigationSignout'
import { auth, db } from '../../firebase'
import { onSnapshot, doc } from 'firebase/firestore'
import Avatar from 'react-avatar'
import { HiOutlineMenuAlt2, HiOutlineX } from 'react-icons/hi'
import { navigationData } from './navigationData'

function Navigation() {
	const user = auth.currentUser
	let uid = user?.uid
	const docRef = doc(db, 'users', uid)
	const [name, setName] = useState('Anonymous User')
	const [photo, setPhoto] = useState('')
	const [menu, setMenu] = useState(false)
	const [links, setLinks] = useState(navigationData)
	const [openLogin, setOpenLogin] = useState(false)
	const [openSignup, setOpenSignup] = useState(false)
	const [openSignout, setOpenSignout] = useState(false)

	useEffect(() => {
		if (user) {
			onSnapshot(docRef, doc => {
				let data = doc.data()
				setName(data.name)
				setPhoto(data.photo)
			})
		} else {
			console.log('This is some bullshit')
		}
	}, [docRef, user, uid])

	const showMenu = () => {
		setMenu(prevState => !prevState)
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

			<Icon alt='application icon' className='navigation__icon' />

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

			{user ? (
				<div className='navigation__wrapper'>
					<h5 className='navigation__name'>{name}</h5>
					<div className='navigation__profile'>
						{photo?.length > 1 ? (
							<img
								src={photo}
								alt='profile'
								className='navigation__profile--picture'
								onClick={() => setOpenSignout(true)}
							/>
						) : (
							<Avatar
								color={Avatar.getRandomColor('sitebase', [
									'red',
									'green',
									'blue',
								])}
								name={name}
								round='100%'
								size='40px'
							/>
						)}
					</div>
				</div>
			) : (
				<>
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
				</>
			)}

			<div className={menu ? 'menu__close' : 'menu'}>
				{user ? (
					<div className='menu__profile'>
						{photo.length > 1 ? (
							<img
								src={photo}
								alt='profile'
								className='menu__profile--picture'
								onClick={() => setOpenSignout(true)}
							/>
						) : (
							<Avatar
								color={Avatar.getRandomColor('sitebase', [
									'red',
									'green',
									'blue',
								])}
								name={name}
								round='100%'
								size='40px'
								className='menu__profile--picture'
							/>
						)}
						<h5 className='menu__name'>{user ? name : null}</h5>
					</div>
				) : null}

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

				{user ? (
					<div className='menu__buttons'>
						<button
							className='menu__button menu__login'
							onClick={() => toSignout()}
						>
							Logout
						</button>
					</div>
				) : (
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
				)}
			</div>
		</div>
	)
}

export default Navigation
