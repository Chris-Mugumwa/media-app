import React, { useState, useEffect } from 'react'
import './favourites.scss'
import { db, auth } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { getAdditionalUserInfo } from 'firebase/auth'
import { BsBookmarkDash } from 'react-icons/bs'

function FavouritesButton() {
	const [buttonActive, setButtonActive] = useState(true)
	const { isNewUser } = getAdditionalUserInfo()

	return (
		<button className='favourites__button-active'>
			<BsBookmarkDash className='favourites__button-icon' />
			<span>Favourites</span>
		</button>
	)
}

export default FavouritesButton
