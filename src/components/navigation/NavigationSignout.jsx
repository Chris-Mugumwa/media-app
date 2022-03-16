import React from 'react'
import './navigation.scss'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

function NavigationSignout({ openSignout, setOpenSignout, toSignout }) {
	if (!openSignout) return null

	const signout = () => {
		toSignout()
		setOpenSignout(false)
	}

	return createPortal(
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className='navigation__signout'>
			<h5 className='navigation__logout' onClick={() => signout()}>
				Sign out
			</h5>
		</motion.div>,
		document.getElementById('logout'),
	)
}

export default NavigationSignout
