import React, { useEffect } from 'react'
import './sidebar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getShowDiscover } from '../../features/shows/showSlice'
import { timeFormat } from './sidebarData'
import { FcRating } from 'react-icons/fc'
import { motion } from 'framer-motion'

function SidebarShows({ currentTab }) {
	const dispatch = useDispatch()
	const discoverShows = useSelector(state => state.show.showDiscover)
	const shows = discoverShows.results

	useEffect(() => {
		dispatch(getShowDiscover())
	}, [dispatch])

	return (
		<>
			<motion.section
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='sidebar__section sidebar__section-show'>
				{shows?.map(show => (
					<Link
						to={`/details/show/${show.id}`}
						className={
							currentTab === 2
								? 'sidebar__container'
								: 'sidebar__not-active'
						}
						key={show.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
							alt={show.name}
							className='sidebar__image'
						/>
						<div className='sidebar__information-container'>
							<h3 className='sidebar__title'>{show.name}</h3>
							<p className='sidebar__description'>{show.overview}</p>
							<div className='sidebar__details'>
								<span className='sidebar__time'>
									{timeFormat(show.first_air_date)}
								</span>
								<span className='sidebar__detail'>
									<FcRating className='sidebar__icon' />
									<span className='sidebar__rating'>
										{show.vote_average}
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

export default SidebarShows
