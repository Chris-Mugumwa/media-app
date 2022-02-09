import React, { useEffect } from 'react'
import './movies.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUpcomingMovies } from '../../features/movies/movieSlice'
import { timeFormat } from '../main/mainData'
import Loading from '../loading/Loading'
import Rejected from '../rejected/Rejected'
import { AiOutlineStar } from 'react-icons/ai'
import { FcRating } from 'react-icons/fc'

function UpcomingMovies() {
	const dispatch = useDispatch()
	const upcomingMovies = useSelector(state => state.movie.upcomingMovies)
	const movieLoading = useSelector(state => state.movie.loading)

	useEffect(() => {
		dispatch(getUpcomingMovies())
	}, [dispatch])

	return (
		<section className='movies'>
			<h2 className='movies__description'>Upcoming Movies</h2>
			{movieLoading ? (
				<Loading />
			) : (
				<div className='movies__container'>
					{upcomingMovies.results ? (
						upcomingMovies.results.map((movie, index) => (
							<section className='movies__card-container' key={index}>
								<img
									src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									alt={movie.original_title}
									className='movies__card'
								/>
								{/* <div className='movies__card-descriptions'>
									<span className='movies__card-description'>
										{movie.overview}
									</span>
								</div> */}
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
							</section>
						))
					) : (
						<Rejected />
					)}
				</div>
			)}
		</section>
	)
}

export default UpcomingMovies
