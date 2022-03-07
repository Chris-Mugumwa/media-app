import React, { useEffect } from 'react'
import './main.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getShowSearch } from '../../features/shows/showSlice'
import { timeFormat } from './mainData'
import { FcRating } from 'react-icons/fc'

function MainShows() {
	const dispatch = useDispatch()
	const showsSearch = useSelector(state => state.show.showSearch)
	const showResult = showsSearch.results

	const text = 'The'

	useEffect(() => {
		dispatch(getShowSearch(text))
	}, [dispatch, text])

	return (
		<>
			<h2 className='main__description'>Shows</h2>
			<div className='main__container'>
				{showResult?.map(show => (
					<Link
						to={`/details/show/${show.id}`}
						className='main__card-container'
						key={show.id}
					>
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
					</Link>
				))}
			</div>
		</>
	)
}

export default MainShows
