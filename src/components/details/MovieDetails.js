import React, { useEffect } from 'react'
import './details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails } from '../../features/movies/movieSlice'

function MovieDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const movieDetails = useSelector(state => state.movie.movieDetails)
	console.log('Movies', movieDetails)

	useEffect(() => {
		dispatch(getMovieDetails(id))
	}, [dispatch, id])

	return <section className='details'>Hello World</section>
}

export default MovieDetails
