import React, { useEffect } from 'react'
import './results.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMovieSearch } from '../../features/movies/movieSlice'
import { getShowSearch } from '../../features/shows/showSlice'
import { getAnimeSearch } from '../../features/anime/animeSlice'
import Loading from '../loading/Loading'
import Rejected from '../rejected/Rejected'
import { FcRating } from 'react-icons/fc'

function Results({ term }) {
	const dispatch = useDispatch()
	const moviesSearch = useSelector(state => state.movie.movieSearch)
	const showsSearch = useSelector(state => state.show.showSearch)
	const animesSearch = useSelector(state => state.anime.animeSearch)
	const movieLoading = useSelector(state => state.movie.loading)
	const showLoading = useSelector(state => state.show.loading)
	const animeLoading = useSelector(state => state.anime.loading)
	const movieResult = moviesSearch.results
	const showResult = showsSearch.results
	const animeResult = animesSearch.data

	const text = 'The'
	const animeText = 'sekai'

	useEffect(() => {
		dispatch(getMovieSearch(text))
		dispatch(getShowSearch(text))
		dispatch(getAnimeSearch(animeText))
	}, [dispatch, text])

	// useEffect(() => {
	// 	dispatch(getMovieSearch(term))
	// 	dispatch(getShowSearch(term))
	// 	dispatch(getAnimeSearch(term))
	// }, [dispatch, term])

	const timeFormat = value => {
		if (value) {
			let valueSplit = value.split('')
			let valueSlice = valueSplit.slice(0, 4)
			let valueJoin = valueSlice.join('')
			return valueJoin
		} else {
			return null
		}
	}

	return (
		<main className='main'>
			<h2 className='main__description'>Movies</h2>
			{movieResult ? (
				<div className='main__container'>
					{movieResult.map((movie, index) => (
						<Link
							to={`/details/movie/${movie.id}`}
							className='main__card-container'
							key={index}
						>
							<img
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								alt={movie.original_title}
								className='main__card'
							/>
							<div className='main__card-information'>
								<span className='main__card-name'>{movie.title}</span>
								<div className='main__card-details'>
									<span className='main__card-time'>
										{timeFormat(movie.release_date)}
									</span>
									<span className='main__card-detail'>
										<FcRating className='main__card-icon' />
										<span className='main__card-rating'>
											{movie.vote_average}
										</span>
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			) : null}

			<h2 className='main__description'>Shows</h2>
			{showLoading ? (
				<Loading />
			) : (
				<div className='main__container'>
					{showResult ? (
						showResult.map((show, index) => (
							<Link
								to={`/details/show/${show.id}`}
								className='main__card-container'
								key={index}
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
						))
					) : (
						<Rejected />
					)}
				</div>
			)}

			<h2 className='main__description'>Anime</h2>
			{animeLoading ? (
				<Loading />
			) : (
				<div className='main__container'>
					{animeResult ? (
						animeResult.map((anime, index) => (
							<Link
								to={`/details/anime/${anime.mal_id}`}
								className='main__card-container'
								key={index}
							>
								<img
									src={`${anime.images.jpg.image_url}`}
									alt={anime.title_english}
									className='main__card'
								/>
								<div className='main__card-information'>
									<span className='main__card-name'>
										{anime.title_english
											? anime.title_english
											: anime.title}
									</span>
									<div className='main__card-details'>
										<span className='main__card-time'>
											{anime.year}
										</span>
										<span className='main__card-detail'>
											<FcRating className='main__card-icon' />
											<span className='main__card-rating'>
												{anime.rank}
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
		</main>
	)
}

export default Results
