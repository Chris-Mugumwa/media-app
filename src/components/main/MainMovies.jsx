import React, { useEffect } from 'react'
import './main.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieSearch } from '../../features/movies/movieSlice'
import { timeFormat } from './mainData'
import { FcRating } from 'react-icons/fc'

function MainMovies() {
	const dispatch = useDispatch()
	const moviesSearch = useSelector(state => state.movie.movieSearch)
	const movieResult = moviesSearch.results
	const text = 'The'

	useEffect(() => {
		dispatch(getMovieSearch(text))
	}, [dispatch, text])

	return (
		<>
			<h2 className='main__description'>Movies</h2>
			<div className='main__container'>
				{movieResult?.map(movie => (
					<Link
						to={`/details/movie/${movie.id}`}
						className='main__card-container'
						key={movie.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt={movie.original_title}
							className='main__card'
						/>
						<div className='main__card-information'>
							<span className='main__card-name'>{movie.title}</span>
							<div className='main__card-details'>
								<span className='main__card-time'>
									{timeFormat(movie.release_date)}
								</span>
								<span className='main__card-detail'>
									<FcRating className='main__card-icon' />
									<span className='main__card-rating'>
										{movie.vote_average}
									</span>
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}

export default MainMovies
