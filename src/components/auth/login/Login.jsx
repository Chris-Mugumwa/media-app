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
import { AiOutlineClose, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

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
		signInWithPopup(auth, provider)
			.then(async result => {
				const user = result.user

				const { isNewUser } = getAdditionalUserInfo(result)
				if (isNewUser) {
					try {
						const docRef = await addDoc(collection(db, 'users'), {
							name: user.displayName,
							email: user.email,
							photo: user.photoURL,
							id: user.uid,
						})
						console.log('Document written with ID: ', docRef.id)
					} catch (error) {
						console.error('Error adding document: ', error)
					}
				} else {
					console.log('User already exists')
				}
				setGoogleClick(true)
				setOpenLogin(false)
			})
			.catch(error => console.log('Error has occurred', error))
	}

	if (!openLogin) return null

	return createPortal(
		<>
			<section className='login'>
				<div className='login__close-container'>
					<div className='login__close'>
						<AiOutlineClose
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
								.then(userCredential => {
									const user = userCredential.user
									console.log(user)
									setOpenLogin(false)
								})
								.catch(error => {
									const errorCode = error.code
									const errorMessage = error.message
									errorCode || errorMessage
										? console.log(errorCode)
										: console.log(errorMessage)
								})
						}}
					>
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
									<AiOutlineMail className='login__icon' />
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
									<AiOutlineLock className='login__icon' />
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
									onClick={() => googleLogin()}
								>
									<FcGoogle className='login__google--icon' />
								</button>
							</Form>
						</div>
					</Formik>
				</div>
			</section>
		</>,
		document.getElementById('modal'),
	)
}

export default Login
