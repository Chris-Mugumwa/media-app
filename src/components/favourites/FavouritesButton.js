import React, { useState, useEffect } from 'react'
import './favourites.scss'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieDetails } from '../../features/movies/movieSlice'
import { getShowDetails } from '../../features/shows/showSlice'
import { getAnimeDetails } from '../../features/anime/animeSlice'
import { db, auth } from '../../firebase'
import { setDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { IoAddOutline, IoWarningOutline } from 'react-icons/io5'

function FavouritesButton() {
	const [buttonActive, setButtonActive] = useState(false)
	const [buttonClicked, setButtonClicked] = useState(false)
	const dispatch = useDispatch()
	const { id, mal_id } = useParams()
	const movieDetails = useSelector(state => state.movie.movieDetails)
	const showDetails = useSelector(state => state.show.showDetails)
	const animeDetails = useSelector(state => state.anime.animeDetails)
	const user = auth?.currentUser
	const uid = user?.uid
	const movieRef = doc(
		db,
		'users',
		`${uid}`,
		'favourites',
		`${movieDetails?.id}`,
	)
	const showRef = doc(
		db,
		'users',
		`${uid}`,
		'favourites',
		`${showDetails?.id}`,
	)
	const animeRef = doc(
		db,
		'users',
		`${uid}`,
		'favourites',
		`${animeDetails?.mal_id}`,
	)

	useEffect(() => {
		dispatch(getMovieDetails(id))
		dispatch(getShowDetails(id))
		dispatch(getAnimeDetails(mal_id))
	}, [dispatch, id, mal_id])

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

	const addShow = async () => {
		await setDoc(showRef, {
			id: showDetails.id,
			name: showDetails.original_name,
			active: true,
		}).then(response => console.log('Data Added: Show', response))
	}

	const addAnime = async () => {
		await setDoc(animeRef, {
			id: animeDetails.mal_id,
			name: animeDetails.title,
			active: true,
		}).then(response => console.log('Data Added: Anime', response))
	}

	const addMedia = async () => {
		if (movieDetails) {
			await addMovie()
			setButtonClicked(prevState => !prevState)
			return addMovie()
		}
		if (showDetails) {
			await addShow()
			setButtonClicked(prevState => !prevState)
			return addShow()
		}
		if (animeDetails) {
			await addAnime()
			setButtonClicked(prevState => !prevState)
			return addAnime()
		}
	}

	const deleteMedia = async () => {
		if (movieDetails) {
			deleteDoc(movieRef).then(() =>
				setButtonClicked(prevState => !prevState),
			)
		}
		if (showDetails) {
			deleteDoc(showRef).then(() =>
				setButtonClicked(prevState => !prevState),
			)
		}
		if (animeDetails) {
			deleteDoc(animeRef).then(() =>
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

export default FavouritesButton
