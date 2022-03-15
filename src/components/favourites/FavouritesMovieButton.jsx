import React, { useState, useEffect } from 'react'
import './favourites.scss'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieDetails } from '../../features/movies/movieSlice'
import { db, auth } from '../../firebase'
import { setDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { IoAddOutline, IoWarningOutline } from 'react-icons/io5'

function FavouritesMovieButton() {
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

	const addMovie = async () => {
		await setDoc(movieRef, {
			id: movieDetails.id,
			name: movieDetails.original_title,
			active: true,
		}).then(response => console.log('Data Added: Movie', response))
	}

	return (
		<>
			{user ? (
				<button
					className='favourites__button-active'
					onClick={() => addMovie()}>
					<IoAddOutline className='favourites__button-icon' />
					<span>Favourites</span>
				</button>
			) : (
				<button
					disabled
					className='favourites__button-active favourites__button-inactive'>
					<IoWarningOutline className='favourites__button-icon' />
					<span>Account Required</span>
				</button>
			)}
		</>
	)
}

export default FavouritesMovieButton
