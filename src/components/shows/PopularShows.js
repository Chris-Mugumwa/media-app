import React, { useEffect } from 'react'
import './shows.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPopularShows } from '../../features/shows/showSlice'
import { timeFormat } from '../main/mainData'
import Loading from '../loading/Loading'
import Rejected from '../rejected/Rejected'
import { AiOutlineStar } from 'react-icons/ai'
import { FcRating } from 'react-icons/fc'

function PopularShows() {
	const dispatch = useDispatch()
	const popularShows = useSelector(state => state.show.popularShows)
	const showLoading = useSelector(state => state.show.loading)

	useEffect(() => {
		dispatch(getPopularShows())
	}, [dispatch])

	return (
		<section className='shows'>
			<h2 className='shows__description'>Trending TV-Shows</h2>
			{showLoading ? (
				<Loading />
			) : (
				<div className='shows__container'>
					{popularShows.results ? (
						popularShows.results.map((show, index) => (
							<Link
								to={`/details/show/${show.id}`}
								className='shows__card-container'
								key={index}
							>
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
						))
					) : (
						<Rejected />
					)}
				</div>
			)}
		</section>
	)
}

export default PopularShows
