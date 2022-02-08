import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies } from '../../features/movies/movieSlice'
import { Link, useNavigate } from 'react-router-dom'
import { timeFormat } from '../main/mainData'
import { AiOutlineStar } from 'react-icons/ai'
import { FcRating } from 'react-icons/fc'
import Loading from '../loading/Loading'
import Rejected from '../rejected/Rejected'
import './movies.scss'

function Movies() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const moviesSelector = useSelector(state => state.movie.popularMovies)
	const movieLoading = useSelector(state => state.movie.loading)
	const movies = moviesSelector.results

	useEffect(() => {
		dispatch(getPopularMovies())
	}, [dispatch])

	return (
		<>
			<h2 className='main__description'>Trending Movies</h2>
			<>
				{movieLoading ? (
					<Loading />
				) : (
					<div className='main__container'>
						{movies ? (
							movies.map((movie, index) => (
								<section className='main__card-container' key={index}>
									<img
										src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
										alt={movie.original_title}
										className='main__card'
									/>
									{/* <div className='main__card-descriptions'>
									<span className='main__card-description'>
										{movie.overview}
									</span>
								</div> */}
									<div className='main__card-information'>
										<span className='main__card-name'>
											{movie.title}
										</span>
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
								</section>
							))
						) : (
							<Rejected />
						)}
					</div>
				)}
			</>
		</>
	)
}

export default Movies
