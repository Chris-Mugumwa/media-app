import React, { useEffect } from 'react'
import './results.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieSearch } from '../../features/movies/movieSlice'
import { getShowSearch } from '../../features/shows/showSlice'
import { getAnimeSearch } from '../../features/anime/animeSlice'
import Loading from '../loading/Loading'
import Rejected from '../rejected/Rejected'

function Results({ term }) {
	const dispatch = useDispatch()
	const moviesSearch = useSelector(state => state.movie.movieSearch)
	const showsSearch = useSelector(state => state.show.showSearch)
	const animesSearch = useSelector(state => state.anime.animeSearch)
   const movieLoading = useSelector(state => state.movie.loading)
	const showLoading = useSelector(state => state.show.loading)
	const animeLoading = useSelector(state => state.anime.loading)
   const movies = moviesSearch.results
	const shows = showsSearch.results
   const animes = animesSearch.data

	useEffect(() => {
		dispatch(getMovieSearch(term))
		dispatch(getShowSearch(term))
		dispatch(getAnimeSearch(term))
	}, [dispatch, term])

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
			<h2 className='main__description'>Movies:</h2>
			{movieLoading ? (
				<Loading />
			) : (
				<div className='main__container'>
					{movies ? (
						movies.map((movie, index) => (
							<section className='main__card-container' key={index}>
								<img
									src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									alt={movie.original_title}
									className='main__card'
								/>
								<div className='main__card-information'>
									<span className='main__card-name'>
										{movie.title}
									</span>
									<span className='main__card-name'>
										{timeFormat(movie.release_date)}
									</span>
								</div>
							</section>
						))
					) : (
						<Rejected />
					)}
				</div>
			)}

			<h2 className='main__description'>Shows:</h2>
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
									<span className='main__card-name'>
										{timeFormat(show.first_air_date)}
									</span>
								</div>
							</section>
						))
					) : (
						<Rejected />
					)}
				</div>
			)}

			<h2 className='main__description'>Anime:</h2>
			{animeLoading ? (
				<Loading />
			) : (
				<div className='main__container'>
					{animes ? (
						animes.map((anime, index) => (
							<section className='main__card-container' key={index}>
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
									<span className='main__card-name'>{anime.year}</span>
								</div>
							</section>
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
