import React, { useEffect, useState } from 'react'
import './movies.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTopRatedMovies } from '../../features/movies/movieSlice'
import { timeFormat } from '../main/mainData'
import Pagination from '../pagination/Pagination'
import { FcRating } from 'react-icons/fc'
import { motion } from 'framer-motion'

function TopRatedMovies() {
	const [page, setPage] = useState(1)
	const dispatch = useDispatch()
	const topRatedMovies = useSelector(state => state.movie.topRatedMovies)
	const movies = topRatedMovies.results

	useEffect(() => {
		dispatch(getTopRatedMovies(page))
	}, [dispatch, page])

	return (
		<motion.section
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className='movies'>
			<h2 className='movies__description'>Top Rated Movies</h2>
			<Pagination setPage={setPage} page={page} />
			<div className='movies__container'>
				{movies?.map(movie => (
					<Link
						to={`/details/movies/${movie.id}`}
						className='movies__card-container'
						key={movie.id}>
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
				))}
			</div>
		</motion.section>
	)
}

export default TopRatedMovies
