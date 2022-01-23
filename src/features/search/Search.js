import React from 'react'
import './search.scss'
import { IoSearchOutline } from 'react-icons/io5'

function Search() {
	return (
		<section className='search'>
			<form className='search__form'>
				<input
					type='text'
					name='search'
					className='search__input'
					placeholder='Search Movies, Tv-shows, Anime'
				/>
				<button className='search__button'>
					<IoSearchOutline className='search__button-icon' />
				</button>
			</form>
		</section>
	)
}

export default Search
