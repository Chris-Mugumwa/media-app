import React, { useEffect } from 'react'
import './movies.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies } from '../../features/movies/movieSlice'
import { timeFormat } from '../main/mainData'
import Loading from '../loading/Loading'
import Rejected from '../rejected/Rejected'
import { AiOutlineStar } from 'react-icons/ai'
import { FcRating } from 'react-icons/fc'

function PopularMovies() {
	const dispatch = useDispatch()
	const popularMovies = useSelector(state => state.movie.popularMovies)
	const movieLoading = useSelector(state => state.movie.loading)

	useEffect(() => {
		dispatch(getPopularMovies())
	}, [dispatch])

	return (
		<section className='movies'>
			<h2 className='movies__description'>Trending Movies</h2>
			{movieLoading ? (
				<Loading />
			) : (
				<div className='movies__container'>
					{popularMovies.results ? (
						popularMovies.results.map((movie, index) => (
							<Link
								to={`/details/${movie.id}`}
								className='movies__card-container'
								key={index}
							>
								<img
									src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									alt={movie.original_title}
									className='movies__card'
								/>
								<div className='movies__card-information'>
									<span className='movies__card-name'>
										{movie.title}
									</span>
									<div className='movies__card-details'>
										<span className='movies__card-time'>
											{timeFormat(movie.release_date)}
										</span>
										<span className='movies__card-detail'>
											<FcRating className='movies__card-icon' />
											<span className='movies__card-rating'>
												{movie.vote_average}
											</span>
										</span>
									</div>
								</div>
							</Link>
						))
					) : (
						<Rejected />
					)}
				</div>
			)}
		</section>
	)
}

export default PopularMovies
