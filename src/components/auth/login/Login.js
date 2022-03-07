import React from 'react'
import './login.scss'
import { createPortal } from 'react-dom'

function Login({ login, setOpenLogin }) {
	if (!login) return null

	return createPortal(
		<section className='login'>
			<div className='login-container'>HELLO WORLD</div>
		</section>,
		document.getElementById('modal'),
	)
}

export default Login
