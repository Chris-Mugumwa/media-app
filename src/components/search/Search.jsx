import React, { useState } from 'react'
import './search.scss'
import { useDispatch } from 'react-redux'
import { getMovieSearch } from '../../features/movies/movieSlice'
import { getShowSearch } from '../../features/shows/showSlice'
import { getAnimeSearch } from '../../features/anime/animeSlice'
import { useNavigate } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'

function Search() {
	const [term, setTerm] = useState('')
	const dispatch = useDispatch()
	let navigate = useNavigate()

	const searchMedia = event => {
		event.preventDefault()
		dispatch(getMovieSearch(term))
		dispatch(getShowSearch(term))
		dispatch(getAnimeSearch(term))
		navigate(`/searched/${term}`)
		setTerm('')
	}

	return (
		<section className='search'>
			<form
				className='search__form'
				autoComplete='off'
				onSubmit={searchMedia}>
				<input
					type='text'
					name='search'
					className='search__input'
					placeholder='Search Movies, Tv-shows, Anime'
					autoComplete='off'
					onChange={event => setTerm(event.target.value)}
					value={term}
				/>
				<button type='submit' className='search__button'>
					<IoSearchOutline
						className='search__button-icon'
						onClick={() => searchMedia}
					/>
				</button>
			</form>
		</section>
	)
}

export default Search
