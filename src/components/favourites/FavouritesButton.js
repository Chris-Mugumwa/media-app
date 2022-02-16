import React from 'react'
import { BiBookmarkHeart } from 'react-icons/bi'

function FavouritesButton() {
	return (
		<button className='favourites__button'>
			<BiBookmarkHeart className='favourites__button-icon' />
			<span>Favourites</span>
		</button>
	)
}

export default FavouritesButton
