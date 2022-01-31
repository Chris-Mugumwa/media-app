import React, { useState, useEffect } from 'react'
import './sidebar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRatedMovies } from '../../features/movies/movieSlice'
import { getTopRatedShows } from '../../features/shows/showSlice'
import { getRandomAnime } from '../../features/anime/animeSlice'
import Rejected from '../rejected/Rejected'
import SidebarData from './SidebarData'

function Sidebar() {
	const dispatch = useDispatch()
	const topMovies = useSelector(state => state.movie.topRatedMovies)
	const topShows = useSelector(state => state.show.topRatedShows)
	const randomAnime = useSelector(state => state.anime.randomAnime)
	const movies = topMovies.results
	const shows = topShows.results
	const animes = randomAnime.data

	useEffect(() => {
		dispatch(getTopRatedMovies())
		dispatch(getTopRatedShows())
		dispatch(getRandomAnime())
	}, [dispatch])

	return (
		<aside className='sidebar'>
			<nav className='sidebar__navigation'>
				<ul className='sidebar__list'>
					<li className='sidebar__item'>
						Discover
					</li>
				</ul>

				<section className='sidebar__section'>
					{movies ? (
						movies.map((movie, index) => (
							<div className='sidebar__container' key={index}>
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
							<div className='sidebar__container' key={index}>
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
								</div>
							</div>
						))
					) : (
						<Rejected />
					)}
				</section>

				{/* <section className='sidebar__section'>
					{animes ? (
						animes.map((anime, index) => (
							<div className='sidebar__container' key={index}>
								<img
									src={anime.images.jpg.image_url}
									alt={anime.title}
									className='sidebar__image'
								/>
								<div className='sidebar__information-container'>
									<h3 className='sidebar__title'>{anime.title}</h3>
									<p className='sidebar__description'>
										{anime.synopsis}
									</p>
								</div>
							</div>
						))
					) : (
						<Rejected />
					)}
				</section> */}
			</nav>
		</aside>
	)
}

export default Sidebar
