import React, { useState } from 'react'
import './login.scss'
import { createPortal } from 'react-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { db, auth } from '../../../firebase'
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	getAdditionalUserInfo,
} from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import {
	IoCloseOutline,
	IoMailOutline,
	IoLockClosedOutline,
} from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import { motion, AnimatePresence } from 'framer-motion'

const initialValues = { email: '', password: '' }

const validationSchema = yup.object().shape({
	email: yup.string().email('Invalid email').required('Required'),
	password: yup
		.string()
		.min(5, 'Password too short, password should be at least 6 characters')
		.max(20, 'Password too long, password should be less than 20 characters')
		.required('Required'),
})

function Login({ openLogin, setOpenLogin }) {
	const provider = new GoogleAuthProvider()
	const [googleClick, setGoogleClick] = useState(false)

	const googleLogin = () => {
		setGoogleClick(true)
		signInWithPopup(auth, provider)
			.then(async result => {
				const user = result.user

				const { isNewUser } = getAdditionalUserInfo(result)
				if (isNewUser) {
					try {
						await addDoc(collection(db, 'users'), {
							name: user.displayName,
							email: user.email,
							photo: user.photoURL,
							id: user.uid,
						})
					} catch (error) {
						console.error('Error adding document: ', error)
					}
				}
				setOpenLogin(false)
			})
			.catch(error => console.log('Error has occurred', error))
	}

	return createPortal(
		<AnimatePresence exitBeforeEnter>
			{openLogin && (
				<motion.section
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					className='login'>
					<div className='login__close-container'>
						<div className='login__close'>
							<IoCloseOutline
								className='login__close--icon'
								onClick={() => setOpenLogin(false)}
							/>
						</div>
					</div>
					<div className='login__container'>
						<h2 className='login__header'>Login</h2>
						<Formik
							className='login__formik'
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={values => {
								signInWithEmailAndPassword(
									auth,
									values.email,
									values.password,
								)
									.then(() => {
										setOpenLogin(false)
									})
									.catch(error => {
										const errorCode = error.code
										const errorMessage = error.message
										errorCode || errorMessage
											? console.log(errorCode)
											: console.log(errorMessage)
									})
							}}>
							<div className='login__wrapper'>
								<Form className='login__form' autocomplete='off'>
									<div className='login__form-container'>
										<label className='login__label'>email</label>
										<Field
											className='login__field'
											id='email'
											name='email'
											autocomplete='off'
											type='email'
											placeholder='e.g. johncarter@gmail.com'
										/>
										<IoMailOutline className='login__icon' />
										{googleClick === true ? null : (
											<ErrorMessage
												name='email'
												component='div'
												className='login__error'
											/>
										)}
									</div>
									<div className='login__form-container'>
										<label className='login__label'>password</label>
										<Field
											className='login__field'
											id='password'
											name='password'
											autocomplete='off'
											type='password'
											placeholder='Must be 6 characters or longer'
										/>
										<IoLockClosedOutline className='login__icon' />
										{googleClick === true ? null : (
											<ErrorMessage
												name='password'
												component='div'
												className='login__error'
											/>
										)}
									</div>
									<button type='submit' className='login__submit'>
										Submit
									</button>
									<button
										type='submit'
										className='login__google'
										onClick={() => googleLogin()}>
										<FcGoogle className='login__google--icon' />
									</button>
								</Form>
							</div>
						</Formik>
					</div>
				</motion.section>
			)}
		</AnimatePresence>,
		document.getElementById('modal'),
	)
}

export default Login
