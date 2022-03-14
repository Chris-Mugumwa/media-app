import React, { useState, useEffect } from 'react'
import './favourites.scss'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAnimeDetails } from '../../features/anime/animeSlice'
import { db, auth } from '../../firebase'
import { setDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { IoAddOutline, IoWarningOutline } from 'react-icons/io5'

function FavouritesAnimeButton() {
	const [buttonActive, setButtonActive] = useState(false)
	const [buttonClicked, setButtonClicked] = useState(false)
	const dispatch = useDispatch()
	const { mal_id } = useParams()
	const anime = useSelector(state => state.anime.animeDetails)
	const animeDetails = anime.data
	const user = auth?.currentUser
	const uid = user?.uid

	const animeRef = doc(
		db,
		'users',
		`${uid}`,
		'favouriteAnime',
		`${animeDetails?.mal_id}`,
	)

	useEffect(() => {
		dispatch(getAnimeDetails(mal_id))
	}, [dispatch, mal_id])

	useEffect(() => {
		if (user) {
			setButtonActive(true)
		} else {
			setButtonActive(false)
		}
	}, [user, buttonActive])

	const addAnime = async () => {
		await setDoc(animeRef, {
			id: animeDetails.mal_id,
			name: animeDetails.title,
			active: true,
		}).then(response => console.log('Data Added: Anime', response))
	}

	const addMedia = async () => {
		if (animeDetails) {
			await addAnime()
			setButtonClicked(prevState => !prevState)
			return addAnime()
		}
	}

	const deleteMedia = async () => {
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

export default FavouritesAnimeButton
