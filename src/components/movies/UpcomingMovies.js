import React, { useEffect, useState } from 'react'
import './movies.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUpcomingMovies } from '../../features/movies/movieSlice'
import Pagination from '../pagination/Pagination'
import { timeFormat } from '../main/mainData'
import { FcRating } from 'react-icons/fc'

function UpcomingMovies() {
	const [page, setPage] = useState(1)
	const dispatch = useDispatch()
	const upcomingMovies = useSelector(state => state.movie.upcomingMovies)

	useEffect(() => {
		dispatch(getUpcomingMovies(page))
	}, [dispatch, page])

	return (
		<section className='movies'>
			<h2 className='movies__description'>Upcoming Movies</h2>
			<Pagination setPage={setPage} page={page} />

			<div className='movies__container'>
				{upcomingMovies.results?.map(movie => (
					<>
						<Link
							to={`/details/movie/${movie.id}`}
							className='movies__card-container'
							key={movie.id}
						>
							<img
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								alt={movie.original_title}
								className='movies__card'
							/>
							<div className='movies__card-information'>
								<span className='movies__card-name'>{movie.title}</span>
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
					</>
				))}
			</div>
		</section>
	)
}

export default UpcomingMovies
