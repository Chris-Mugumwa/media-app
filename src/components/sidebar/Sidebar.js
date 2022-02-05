import React, { useState, useEffect } from 'react'
import './sidebar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRatedMovies } from '../../features/movies/movieSlice'
import { getTopRatedShows } from '../../features/shows/showSlice'
import { getRandomAnime } from '../../features/anime/animeSlice'
import Rejected from '../rejected/Rejected'
import { FcRating } from 'react-icons/fc'

function Sidebar() {
	const [currentTab, setCurrentTab] = useState(1)
	const dispatch = useDispatch()
	const topMovies = useSelector(state => state.movie.topRatedMovies)
	const topShows = useSelector(state => state.show.topRatedShows)
	const randomAnime = useSelector(state => state.anime.randomAnime)
	const movies = topMovies.results
	const shows = topShows.results
	const animes = randomAnime.data
	console.log(animes)

	useEffect(() => {
		dispatch(getTopRatedMovies())
		dispatch(getTopRatedShows())
		dispatch(getRandomAnime())
	}, [dispatch])

	const activeTab = index => {
		setCurrentTab(index)
	}

	const timeFormat = value => {
		if (value) {
			let valueSplit = value.split('')
			let valueSlice = valueSplit.slice(0, 4)
			let valueJoin = valueSlice.join('')
			return valueJoin
		} else {
			console.log('no value')
			return null
		}
	}

	return (
		<aside className='sidebar'>
			<nav className='sidebar__navigation'>
				<ul className='sidebar__list'>
					<li
						className={
							currentTab === 1
								? 'sidebar__item sidebar__current'
								: 'sidebar__item'
						}
						onClick={() => activeTab(1)}
					>
						Movies
					</li>
					<li
						className={
							currentTab === 2
								? 'sidebar__item sidebar__current'
								: 'sidebar__item'
						}
						onClick={() => activeTab(2)}
					>
						Shows
					</li>
				</ul>

				<section className='sidebar__section'>
					{movies ? (
						movies.map((movie, index) => (
							<div
								className={
									currentTab === 1
										? 'sidebar__container'
										: 'sidebar__not-active'
								}
								key={index}
							>
								<img
									src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									alt={movie.title}
									className='sidebar__image'
								/>
								<div className='sidebar__information-container'>
									<h3 className='sidebar__title'>{movie.title}</h3>
									<p className='sidebar__description'>
										{movie.overview}
									</p>
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
							</div>
						))
					) : (
						<Rejected />
					)}
				</section>

				<section className='sidebar__section'>
					{shows ? (
						shows.map((show, index) => (
							<div
								className={
									currentTab === 2
										? 'sidebar__container'
										: 'sidebar__not-active'
								}
								key={index}
							>
								<img
									src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
									alt={show.name}
									className='sidebar__image'
								/>
								<div className='sidebar__information-container'>
									<h3 className='sidebar__title'>{show.name}</h3>
									<p className='sidebar__description'>
										{show.overview}
									</p>
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
							</div>
						))
					) : (
						<Rejected />
					)}
				</section>
			</nav>
		</aside>
	)
}

export default Sidebar
