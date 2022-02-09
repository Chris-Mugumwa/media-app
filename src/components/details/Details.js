import React, { useEffect } from 'react'
import './details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails } from '../../features/movies/movieSlice'
import { getShowDetails } from '../../features/shows/showSlice'
import { getAnimeDetails } from '../../features/anime/animeSlice'

function Details() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const movieDetails = useSelector(state => state.movie.movieDetails)
	const showDetails = useSelector(state => state.movie.movieDetails)
	const animeDetails = useSelector(state => state.anime.animeDetails)
	console.log('Movies', movieDetails)
	console.log('Shows', showDetails)
	console.log('Anime', animeDetails)

	useEffect(() => {
		dispatch(getMovieDetails(id))
	}, [dispatch, id])

	useEffect(() => {
		dispatch(getShowDetails(id))
	}, [dispatch, id])

	useEffect(() => {
		dispatch(getAnimeDetails(id))
	}, [dispatch, id])

	return <section className='details'>Hello World</section>
}

export default Details
