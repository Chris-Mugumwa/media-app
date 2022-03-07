import React, { useState, useEffect } from 'react'
import './sidebar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMovieDiscover } from '../../features/movies/movieSlice'
import { getShowDiscover } from '../../features/shows/showSlice'
import { getAnimeSeasons } from '../../features/anime/animeSlice'
import Rejected from '../rejected/Rejected'
import { FcRating } from 'react-icons/fc'

function Sidebar() {
	const [currentTab, setCurrentTab] = useState(1)
	const dispatch = useDispatch()
	const discoverMovies = useSelector(state => state.movie.movieDiscover)
	const discoverShows = useSelector(state => state.show.showDiscover)
	const discoverAnime = useSelector(state => state.anime.animeSeasons)
	const movies = discoverMovies.results
	const shows = discoverShows.results
	const animes = discoverAnime.data

	useEffect(() => {
		dispatch(getMovieDiscover())
		dispatch(getShowDiscover())
		dispatch(getAnimeSeasons())
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
					<li
						className={
							currentTab === 3
								? 'sidebar__item sidebar__current'
								: 'sidebar__item'
						}
						onClick={() => activeTab(3)}
					>
						Anime
					</li>
				</ul>

				<section className='sidebar__section sidebar__section-movies'>
					{movies ? (
						movies.map(movie => (
							<Link
								to={`/details/movie/${movie.id}`}
								className={
									currentTab === 1
										? 'sidebar__container'
										: 'sidebar__not-active'
								}
								key={movie.id}
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
							</Link>
						))
					) : (
						<Rejected />
					)}
				</section>

				<section className='sidebar__section sidebar__section-show'>
					{shows ? (
						shows.map(show => (
							<Link
								to={`/details/show/${show.id}`}
								className={
									currentTab === 2
										? 'sidebar__container'
										: 'sidebar__not-active'
								}
								key={show.id}
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
							</Link>
						))
					) : (
						<Rejected />
					)}
				</section>

				<section className='sidebar__section sidebar__section-anime'>
					{animes ? (
						animes.map(anime => (
							<Link
								to={`/details/anime/${anime.mal_id}`}
								className={
									currentTab === 3
										? 'sidebar__container'
										: 'sidebar__not-active'
								}
								key={anime.mal_id}
							>
								<img
									src={anime.images.jpg.image_url}
									alt={
										anime.title_english
											? anime.title_english
											: anime.title
									}
									className='sidebar__image'
								/>
								<div className='sidebar__information-container'>
									<h3 className='sidebar__title'>
										{anime.title_english
											? anime.title_english
											: anime.title}
									</h3>
									<p className='sidebar__description'>
										{anime.synopsis ? anime.synopsis : 'unavailable'}
									</p>
									<div className='sidebar__details'>
										<span className='sidebar__time'>
											{anime.year ? anime.year : 'year'}
										</span>
										<span className='sidebar__detail'>
											<FcRating className='sidebar__icon' />
											<span className='sidebar__time'>
												{anime.status}
											</span>
										</span>
									</div>
								</div>
							</Link>
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
