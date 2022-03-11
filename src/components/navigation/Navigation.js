import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
	const navigate = useNavigate()
	const user = auth?.currentUser?.uid
	const docRef = doc(db, 'users', `${user}`)
	const [name, setName] = useState('User')
	const [photo, setPhoto] = useState('')
	const [menu, setMenu] = useState(false)
	const [buttonChange, setButtonChange] = useState(false)
	const [links, setLinks] = useState(navigationData)
	const [openLogin, setOpenLogin] = useState(false)
	const [openSignup, setOpenSignup] = useState(false)
	const [openSignout, setOpenSignout] = useState(false)
	const [avatar, setAvatar] = useState(
		<Avatar
			color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
			name='User'
			round='100%'
			size='40px'
			className='navigation__avatar'
			onClick={() => showSignout()}
		/>,
	)

	useEffect(() => {
		if (user) {
			onSnapshot(docRef, doc => {
				let data = doc.data()
				setName(data.displayName)
				setPhoto(data.photo)
				setAvatar(
					<Avatar
						color={Avatar.getRandomColor('sitebase', [
							'red',
							'green',
							'blue',
						])}
						name={data.displayName}
						round='100%'
						size='40px'
						className='navigation__avatar'
						onClick={() => showSignout()}
					/>,
				)
			})
		} else {
			setOpenSignout(false)
		}
	}, [docRef, user])

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
		auth.signOut().then(() => setButtonChange(true))
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
				onClick={() => showMenu()}
			>
				<HiOutlineMenuAlt2 className='navigation__hamburger navigation__hamburger-close' />
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
								onClick={() => showSignout()}
							/>
						) : (
							avatar
						)}
					</div>
				</div>
			) : buttonChange === true ? (
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
				<div className='menu__profile-container'>
					{user ? (
						<>
							<div className='menu__profile'>
								{photo.length > 1 ? (
									<img
										src={photo}
										alt='profile'
										className='menu__profile--picture'
									/>
								) : (
									avatar
								)}
								<h5 className='menu__name'>{user ? name : null}</h5>
							</div>
						</>
					) : null}
					<div
						className='menu__hamburger-container'
						onClick={() => showMenu()}
					>
						<HiOutlineX className='menu__hamburger navigation__hamburger-close' />
					</div>
				</div>
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
