import React, { useState, useEffect } from 'react'
import './favourites.scss'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getShowDetails } from '../../features/shows/showSlice'
import { db, auth } from '../../firebase'
import { setDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { IoAddOutline, IoWarningOutline } from 'react-icons/io5'

function FavouritesShowButton() {
	const [buttonActive, setButtonActive] = useState(false)
	const [buttonClicked, setButtonClicked] = useState(false)
	const dispatch = useDispatch()
	const { id } = useParams()
	const showDetails = useSelector(state => state.show.showDetails)
	const user = auth?.currentUser
	const uid = user?.uid

	const showRef = doc(
		db,
		'users',
		`${uid}`,
		'favouriteShows',
		`${showDetails?.id}`,
	)

	useEffect(() => {
		dispatch(getShowDetails(id))
	}, [dispatch, id])

	useEffect(() => {
		if (user) {
			setButtonActive(true)
		} else {
			setButtonActive(false)
		}
	}, [user, buttonActive])

	const addShow = async () => {
		await setDoc(showRef, {
			id: showDetails.id,
			name: showDetails.original_name,
			active: true,
		}).then(response => console.log('Data Added: Show', response))
	}

	const addMedia = async () => {
		if (showDetails) {
			await addShow()
			setButtonClicked(prevState => !prevState)
			return addShow()
		}
	}

	const deleteMedia = async () => {
		if (showDetails) {
			deleteDoc(showRef).then(() =>
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

export default FavouritesShowButton
