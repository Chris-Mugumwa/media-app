import React, { useState } from 'react'
import './signup.scss'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as yup from 'yup'
import { db, auth } from '../../../firebase'
import { doc, setDoc } from 'firebase/firestore'
import {
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth'
import { createPortal } from 'react-dom'
import {
	IoPersonAddOutline,
	IoCloseOutline,
	IoMailOutline,
	IoLockClosedOutline,
} from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import { motion, AnimatePresence } from 'framer-motion'

const initialValues = { name: '', email: '', password: '' }

const validationSchema = yup.object().shape({
	name: yup
		.string()
		.min(2, 'Name too short')
		.max(15, 'Name too Long')
		.required('Required'),
	email: yup.string().email('Invalid email').required('Required'),
	password: yup
		.string()
		.min(5, 'Password too short, password should be at least 6 characters')
		.max(20, 'Password too long, password should be less than 20 characters')
		.required('Required'),
})

function Signup({ openSignup, setOpenSignup }) {
	const [googleClick, setGoogleClick] = useState(false)
	const provider = new GoogleAuthProvider()

	const googleSignup = () => {
		setGoogleClick(true)
		signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user

				try {
					const usersRef = doc(db, 'users', `${user.uid}`)
					setDoc(usersRef, {
						id: user.uid,
						displayName: user.displayName,
						email: user.email,
						photo: user.photoURL,
						active: true,
					})
				} catch (error) {
					console.error('Error adding document: ', error)
				}

				setOpenSignup(false)
			})
			.catch(error => console.log('Error has occurred', error))
	}

	return createPortal(
		<AnimatePresence exitBeforeEnter>
			{openSignup && (
				<motion.section
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					className='signup'>
					<div className='signup__close-container'>
						<div className='signup__close'>
							<IoCloseOutline
								className='signup__close--icon'
								onClick={() => setOpenSignup(false)}
							/>
						</div>
					</div>
					<div className='signup__container'>
						<h2 className='signup__header'>Sign up</h2>
						<Formik
							className='signup__formik'
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={values => {
								createUserWithEmailAndPassword(
									auth,
									values.email,
									values.password,
								)
									.then(userCredential => {
										const user = userCredential.user

										updateProfile(user, {
											displayName: values.name,
										})

										try {
											const usersRef = doc(
												db,
												'users',
												`${user.uid}`,
											)
											setDoc(usersRef, {
												id: user.uid,
												displayName: values.name,
												email: values.email,
												photo: null,
												active: true,
											}).catch(error =>
												console.log('Did not save to db,', error),
											)
										} catch (error) {
											console.error('Error adding document: ', error)
										}
										setOpenSignup(false)
									})
									.catch(error => {
										const errorCode = error.code
										const errorMessage = error.message
										console.log(errorCode)
										console.log(errorMessage)
									})
							}}>
							<div className='signup__wrapper'>
								<Form className='signup__form' autocomplete='off'>
									<div className='signup__form-container'>
										<label className='signup__label'>full name</label>
										<Field
											className='signup__field'
											id='name'
											name='name'
											autocomplete='off'
											type='text'
											placeholder='e.g. John Carter'
										/>
										<IoPersonAddOutline className='signup__icon' />
										{googleClick === true ? null : (
											<ErrorMessage
												name='name'
												component='div'
												className='signup__error'
											/>
										)}
									</div>

									<div className='signup__form-container'>
										<label className='signup__label'>email</label>
										<Field
											className='signup__field'
											id='email'
											name='email'
											autocomplete='off'
											type='email'
											placeholder='e.g. johncarter@gmail.com'
										/>
										<IoMailOutline className='signup__icon' />
										{googleClick === true ? null : (
											<ErrorMessage
												name='email'
												component='div'
												className='signup__error'
											/>
										)}
									</div>
									<div className='signup__form-container'>
										<label className='signup__label'>password</label>
										<Field
											className='signup__field'
											id='password'
											name='password'
											autocomplete='off'
											type='password'
											placeholder='Must be 6 characters or longer'
										/>
										<IoLockClosedOutline className='signup__icon' />
										{googleClick === true ? null : (
											<ErrorMessage
												name='password'
												component='div'
												className='signup__error'
											/>
										)}
									</div>
									<button type='submit' className='signup__submit'>
										Submit
									</button>
									<button
										type='submit'
										className='signup__google'
										onClick={() => googleSignup()}>
										<FcGoogle className='signup__google--icon' />
									</button>
								</Form>
							</div>
						</Formik>
					</div>
				</motion.section>
			)}
		</AnimatePresence>,
		document.getElementById('portal'),
	)
}

export default Signup
