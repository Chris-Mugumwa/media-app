import React, { useEffect, useState } from 'react'
import './shows.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPopularShows } from '../../features/shows/showSlice'
import { timeFormat } from '../main/mainData'
import Pagination from '../pagination/Pagination'
import { FcRating } from 'react-icons/fc'
import { motion } from 'framer-motion'

function PopularShows() {
	const [page, setPage] = useState(1)
	const dispatch = useDispatch()
	const popularShows = useSelector(state => state.show.popularShows)
	const shows = popularShows.results

	useEffect(() => {
		dispatch(getPopularShows(page))
	}, [dispatch, page])

	return (
		<motion.section
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className='shows'>
			<h2 className='shows__description'>Trending TV-Shows</h2>
			<Pagination setPage={setPage} page={page} />

			<div className='shows__container'>
				{shows?.map(show => (
					<Link
						to={`/details/show/${show.id}`}
						className='shows__card-container'
						key={show.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
							alt={show.original_name}
							className='shows__card'
						/>
						<div className='shows__card-information'>
							<span className='shows__card-name'>
								{show.original_name}
							</span>
							<div className='shows__card-details'>
								<span className='shows__card-time'>
									{timeFormat(show.first_air_date)}
								</span>
								<span className='shows__card-detail'>
									<FcRating className='shows__card-icon' />
									<span className='shows__card-rating'>
										{show.vote_average}
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

export default PopularShows
