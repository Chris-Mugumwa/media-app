import React, { useEffect } from 'react'
import './main.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getMovieSearch } from '../../features/movies/movieSlice'
import { getShowSearch } from '../../features/shows/showSlice'
import { getAnimeSearch } from '../../features/anime/animeSlice'
import { timeFormat } from '../../data/reusableData'
import { FcRating } from 'react-icons/fc'
import { motion } from 'framer-motion'

function Searched() {
	const { name } = useParams()
	const dispatch = useDispatch()
	const moviesSearch = useSelector(state => state.movie.movieSearch)
	const showsSearch = useSelector(state => state.show.showSearch)
	const animesSearch = useSelector(state => state.anime.animeSearch)
	const movieResult = moviesSearch.results
	const showResult = showsSearch.results
	const animeResult = animesSearch.data

	useEffect(() => {
		dispatch(getMovieSearch(name))
		dispatch(getShowSearch(name))
		dispatch(getAnimeSearch(name))
	}, [dispatch, name])

	return (
		<motion.main
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className='main'>
			<h2 className='main__description'>Movies</h2>

			<motion.div Layout className='main__container'>
				{movieResult?.map(movie => (
					<Link
						to={`/details/movie/${movie?.id}`}
						className='main__card-container'
						key={movie?.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
							alt={movie?.original_title}
							className='main__card'
						/>
						<div className='main__card-information'>
							<span className='main__card-name'>{movie?.title}</span>
							<div className='main__card-details'>
								<span className='main__card-time'>
									{timeFormat(movie?.release_date)}
								</span>
								<span className='main__card-detail'>
									<FcRating className='main__card-icon' />
									<span className='main__card-rating'>
										{movie?.vote_average}
									</span>
								</span>
							</div>
						</div>
					</Link>
				))}
			</motion.div>

			<h2 className='main__description'>Shows</h2>

			<motion.div Layout className='main__container'>
				{showResult?.map(show => (
					<Link
						to={`/details/show/${show?.id}`}
						className='main__card-container'
						key={show?.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500/${show?.poster_path}`}
							alt={show?.original_name}
							className='main__card'
						/>
						<div className='main__card-information'>
							<span className='main__card-name'>
								{show?.original_name}
							</span>
							<div className='main__card-details'>
								<span className='main__card-time'>
									{timeFormat(show?.first_air_date)}
								</span>
								<span className='main__card-detail'>
									<FcRating className='main__card-icon' />
									<span className='main__card-rating'>
										{show?.vote_average}
									</span>
								</span>
							</div>
						</div>
					</Link>
				))}
			</motion.div>

			<h2 className='main__description'>Anime</h2>

			<motion.div Layout className='main__container'>
				{animeResult?.map(anime => (
					<Link
						to={`/details/anime/${anime?.mal_id}`}
						className='main__card-container'
						key={anime.mal_id}>
						<img
							src={`${anime?.images?.jpg?.image_url}`}
							alt={anime?.title_english}
							className='main__card'
						/>
						<div className='main__card-information'>
							<span className='main__card-name'>
								{anime?.title_english
									? anime?.title_english
									: anime?.title}
							</span>
							<div className='main__card-details'>
								<span className='main__card-time'>{anime?.year}</span>
								<span className='main__card-detail'>
									<FcRating className='main__card-icon' />
									<span className='main__card-rating'>
										{anime?.rank}
									</span>
								</span>
							</div>
						</div>
					</Link>
				))}
			</motion.div>
		</motion.main>
	)
}

export default Searched
