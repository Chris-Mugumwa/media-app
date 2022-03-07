import React from 'react'
import './signup.scss'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as yup from 'yup'
import firebase from '../../../firebase'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from 'firebase/auth'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

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
	const provider = new GoogleAuthProvider()
	const auth = getAuth()
	const db = getFirestore()

	const googleSignup = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential.accessToken
				const user = result.user
				console.log('Here is the user:', user.displayName)

				try {
					const docRef = addDoc(collection(db, 'users'), {
						name: user.displayName,
						email: user.email,
						photo: user.photoURL,
						id: user.uid,
					})
					console.log('Document written with ID: ', docRef.id)
				} catch (error) {
					console.error('Error adding document: ', error)
				}
			})
			.catch(error => console.log('Error has occurred', error))
	}

	if (!openSignup) return null

	return createPortal(
		<section className='signup'>
			<div className='signup__close'>
				<AiOutlineClose
					className='signup__close--icon'
					onClick={() => setOpenSignup(false)}
				/>
			</div>
			<div className='signup__container'>
				<h2 className='signup__header'>Sign up</h2>
				<Formik
					initialValues={{ name: '', email: '', password: '' }}
					validationSchema={validationSchema}
					onSubmit={values => {
						createUserWithEmailAndPassword(
							auth,
							values.email,
							values.password,
						)
							.then(userCredential => {
								const user = userCredential.user

								try {
									const docRef = addDoc(collection(db, 'users'), {
										name: values.name,
										email: values.email,
										// photo: user.photoURL,
										id: user.uid,
									})
									console.log('Document written with ID: ', docRef.id)
								} catch (error) {
									console.error('Error adding document: ', error)
								}
							})
							.catch(error => {
								const errorCode = error.code
								const errorMessage = error.message
								console.log(errorCode)
								console.log(errorMessage)
							})
					}}
				>
					<div className='signup__wrapper'>
						<button
							className='signup__google'
							onClick={() => googleSignup()}
						>
							<FcGoogle className='signup__google--icon' />
							Google
						</button>
						<div className='signup__form-container'>
							<Form className='signup__form' autoComplete='off'>
								<label className='signup__label'>full name</label>
								<Field
									className='signup__field'
									id='name'
									name='name'
									autoComplete='off'
									type='text'
									placeholder='e.g. John Carter'
								/>
								<ErrorMessage name='name' />
							</Form>
						</div>
						<div className='signup__form-container'>
							<Form className='signup__form' autoComplete='off'>
								<label className='signup__label'>email</label>
								<Field
									className='signup__field'
									id='email'
									name='email'
									autoComplete='off'
									type='email'
									placeholder='e.g. johncarter@gmail.com'
								/>
								<ErrorMessage name='email' />
							</Form>
						</div>
						<div className='signup__form-container'>
							<Form className='signup__form' autoComplete='off'>
								<label className='signup__label'>password</label>
								<Field
									className='signup__field'
									id='password'
									name='password'
									autoComplete='off'
									type='password'
									placeholder='Must be 6 characters or longer'
								/>
								<ErrorMessage name='password' />
							</Form>
						</div>
						<button type='submit' className='signup__submit'>
							Submit
						</button>
					</div>
				</Formik>
			</div>
		</section>,
		document.getElementById('portal'),
	)
}

export default Signup
