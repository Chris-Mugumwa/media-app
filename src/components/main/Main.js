import React, { useEffect } from 'react'
import './main.scss'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getPopularMovies } from '../../features/movies/movieSlice'
import { getPopularShows } from '../../features/shows/showSlice'
import { getPopularAnime } from '../../features/anime/animeSlice'
import { getMovieSearch } from '../../features/movies/movieSlice'
import { getShowSearch } from '../../features/shows/showSlice'
import { getAnimeSearch } from '../../features/anime/animeSlice'
import Loading from '../loading/Loading'
import Rejected from '../rejected/Rejected'
import { AiOutlineStar } from 'react-icons/ai'

function Main({term}) {
	const dispatch = useDispatch()
   const navigate = useNavigate()
	const moviesSelector = useSelector(state => state.movie.popularMovies)
	const showsSelector = useSelector(state => state.show.popularShows)
   const animesSelector = useSelector(state => state.anime.popularAnime)
   const moviesSearch = useSelector(state => state.movie.movieSearch)
	const showsSearch = useSelector(state => state.show.showSearch)
	const animesSearch = useSelector(state => state.anime.animeSearch)
	const movieLoading = useSelector(state => state.movie.loading)
	const showLoading = useSelector(state => state.show.loading)
	const animeLoading = useSelector(state => state.anime.loading)
	const movies = moviesSelector.results
	const shows = showsSelector.results
   const animes = animesSelector.data
   const movieResult = moviesSearch.results
   const showResult = showsSearch.results
   const animeResult = animesSearch.data
   
	useEffect(() => {
		dispatch(getPopularMovies())
		dispatch(getPopularShows())
		dispatch(getPopularAnime())
      dispatch(getMovieSearch(term))
		dispatch(getShowSearch(term))
		dispatch(getAnimeSearch(term))
	}, [dispatch, term])
   
   const handleClick = () => {
      navigate('/details')
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
		<main className='main'>
			<h2 className='main__description'>Trending Movies</h2>
			{movieLoading ? (
				<Loading />
			) : (
				<div className='main__container'>
					{movies ? (
						movies.map((movie, index) => (
							<section className='main__card-container' key={index} onClick={handleClick}>
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
			)})

			<h2 className='main__description'>Trending TV-Shows</h2>
			{showLoading ? (
				<Loading />
			) : (
				<div className='main__container'>
					{shows ? (
						shows.map((show, index) => (
							<section className='main__card-container' key={index} onClick={() => handleClick}>
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

			<h2 className='main__description'>Trending Anime</h2>
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

export default Main
