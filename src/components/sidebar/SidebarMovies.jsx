import React, { useEffect } from 'react'
import './sidebar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMovieDiscover } from '../../features/movies/movieSlice'
import { timeFormat } from '../../data/reusableData'
import { FcRating } from 'react-icons/fc'
import { motion } from 'framer-motion'

function SidebarMovies({ currentTab }) {
	const dispatch = useDispatch()
	const discoverMovies = useSelector(state => state.movie.movieDiscover)
	const movies = discoverMovies.results

	useEffect(() => {
		dispatch(getMovieDiscover())
	}, [dispatch])

	return (
		<>
			<motion.section
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='sidebar__section sidebar__section-movies'>
				{movies?.map(movie => (
					<Link
						to={`/details/movie/${movie.id}`}
						className={
							currentTab === 1
								? 'sidebar__container'
								: 'sidebar__not-active'
						}
						key={movie.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt={movie.title}
							className='sidebar__image'
						/>
						<div className='sidebar__information-container'>
							<h3 className='sidebar__title'>{movie.title}</h3>
							<p className='sidebar__description'>{movie.overview}</p>
							<div className='sidebar__details'>
								<span className='sidebar__time'>
									{timeFormat(movie.release_date)}
								</span>
								<span className='sidebar__detail'>
									<FcRating className='sidebar__icon' />
									<span className='sidebar__rating'>
										{movie.vote_average}
									</span>
								</span>
							</div>
						</div>
					</Link>
				))}
			</motion.section>
		</>
	)
}

export default SidebarMovies
