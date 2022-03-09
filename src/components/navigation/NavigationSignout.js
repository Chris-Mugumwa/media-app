import React from 'react'
import './navigation.scss'
import { createPortal } from 'react-dom'

function NavigationSignout({ openSignout, setOpenSignout, toSignout }) {
	if (!openSignout) return null

	const signout = () => {
		toSignout()
		setOpenSignout(false)
	}

	return createPortal(
		<div className='navigation__signout'>
			<h5 className='navigation__logout' onClick={() => signout()}>
				Sign out
			</h5>
		</div>,
		document.getElementById('logout'),
	)
}

export default NavigationSignout
