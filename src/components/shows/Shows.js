import React, { useEffect } from 'react'
import './shows.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getPopularShows } from '../../features/shows/showSlice'
import { timeFormat } from '../main/mainData'
import Loading from '../loading/Loading'
import Rejected from '../rejected/Rejected'
import { AiOutlineStar } from 'react-icons/ai'
import { FcRating } from 'react-icons/fc'

function Shows() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const showsSelector = useSelector(state => state.show.popularShows)
	const showLoading = useSelector(state => state.show.loading)
	const shows = showsSelector.results

	useEffect(() => {
		dispatch(getPopularShows())
	}, [dispatch])

	return (
		<>
			<h2 className='main__description'>Trending TV-Shows</h2>

			{showLoading ? (
				<Loading />
			) : (
				<div className='main__container'>
					{shows ? (
						shows.map((show, index) => (
							<section className='main__card-container' key={index}>
								<img
									src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
									alt={show.original_name}
									className='main__card'
								/>
								<div className='main__card-information'>
									<span className='main__card-name'>
										{show.original_name}
									</span>
									<div className='main__card-details'>
										<span className='main__card-time'>
											{timeFormat(show.first_air_date)}
										</span>
										<span className='main__card-detail'>
											<FcRating className='main__card-icon' />
											<span className='main__card-rating'>
												{show.vote_average}
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
	)
}

export default Shows
