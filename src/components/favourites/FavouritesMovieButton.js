import React, { useState, useEffect } from 'react'
import './favourites.scss'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieDetails } from '../../features/movies/movieSlice'
import { db, auth } from '../../firebase'
import { setDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { IoAddOutline, IoWarningOutline } from 'react-icons/io5'

function FavouritesMovieButton() {
	const [buttonActive, setButtonActive] = useState(false)
	const [buttonClicked, setButtonClicked] = useState(false)
	const dispatch = useDispatch()
	const { id } = useParams()
	const movieDetails = useSelector(state => state.movie.movieDetails)
	const user = auth?.currentUser
	const uid = user?.uid
	const movieRef = doc(
		db,
		'users',
		`${uid}`,
		'favouriteMovies',
		`${movieDetails?.id}`,
	)

	useEffect(() => {
		dispatch(getMovieDetails(id))
	}, [dispatch, id])

	useEffect(() => {
		if (user) {
			setButtonActive(true)
		} else {
			setButtonActive(false)
		}
	}, [user, buttonActive])

	const addMovie = async () => {
		await setDoc(movieRef, {
			id: movieDetails.id,
			name: movieDetails.original_title,
			active: true,
		}).then(response => console.log('Data Added: Movie', response))
		console.log('Data Added: Movie')
	}

	const addMedia = async () => {
		if (movieDetails) {
			await addMovie()
			setButtonClicked(prevState => !prevState)
			return addMovie()
		}
	}

	const deleteMedia = async () => {
		if (movieDetails) {
			deleteDoc(movieRef).then(() =>
				setButtonClicked(prevState => !prevState),
			)
		}
	}

	return (
		<>
			{buttonActive === true ? (
				<button
					className='favourites__button-active'
					onClick={() => addMedia()}
				>
					<IoAddOutline className='favourites__button-icon' />
					<span>Favourites</span>
				</button>
			) : (
				<button
					disabled
					className='favourites__button-active favourites__button-inactive'
				>
					<IoWarningOutline className='favourites__button-icon' />
					<span>Account Required</span>
				</button>
			)}
		</>
	)
}

export default FavouritesMovieButton
