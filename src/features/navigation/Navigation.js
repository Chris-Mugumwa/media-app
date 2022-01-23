import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'
import '../navigation/menu.scss'
import { HiOutlineMenuAlt2, HiOutlineX } from 'react-icons/hi'
import { navigationData } from './navigationData'

function Navigation() {
	const [sidebar, setSidebar] = useState(false)
	const [links, setLinks] = useState(navigationData)

	const showSidebar = () => {
		setSidebar(prevState => !prevState)
	}

	return (
		<div className='navigation'>
			<img
				src={process.env.PUBLIC_URL + 'assets/icon.svg'}
				alt='application icon'
				className='navigation__icon'
			/>

			<div
				className='navigation__hamburger-container'
				onClick={() => showSidebar()}
			>
				{sidebar ? (
					<HiOutlineX className='navigation__hamburger navigation__hamburger-close' />
				) : (
					<HiOutlineMenuAlt2 className='navigation__hamburger navigation__hamburger-open' />
				)}
			</div>

			<div className='navigation__buttons'>
				<button className='navigation__button navigation__login'>
					Login
				</button>
				<button className='navigation__button navigation__sign-in'>
					Sign Up
				</button>
			</div>
			<div className={sidebar ? 'menu__close' : 'menu'}>
				<ul className='menu__list'>
					{links.map((link, index) => (
						<div className='menu__item-container' key={index}>
							<Link
								className='menu__item'
								to={link.path}
								onClick={() => setSidebar(false)}
							>
								<span className='menu__icon'>{link.icon}</span>
								{link.name}
							</Link>
						</div>
					))}
				</ul>
				<div className='menu__buttons'>
					<button className='menu__button menu__login'>Login</button>
					<button className='menu__button menu__sign-up'>Sign Up</button>
				</div>
			</div>
		</div>
	)
}

export default Navigation
