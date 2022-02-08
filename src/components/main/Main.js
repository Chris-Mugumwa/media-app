import React, { useState, useEffect } from 'react'
import './main.scss'
// import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieSearch } from '../../features/movies/movieSlice'
import { getShowSearch } from '../../features/shows/showSlice'
import { getAnimeSearch } from '../../features/anime/animeSlice'
import Movies from '../movies/Movies'
import Shows from '../shows/Shows'
import Anime from '../anime/Anime'

function Main({ term }) {
   // const [currentTab, setCurrentTab] = useState(1)
	const dispatch = useDispatch()
	const moviesSearch = useSelector(state => state.movie.movieSearch)
	const showsSearch = useSelector(state => state.show.showSearch)
	const animesSearch = useSelector(state => state.anime.animeSearch)

	// const movieResult = moviesSearch.results
	// const showResult = showsSearch.results
	// const animeResult = animesSearch.data

	useEffect(() => {
		dispatch(getMovieSearch(term))
		dispatch(getShowSearch(term))
		dispatch(getAnimeSearch(term))
	}, [dispatch, term])

	return (
		<main className='main'>
			<Movies />
			<Shows />
			<Anime />
		</main>
	)
}

// {movieResult ? (
//    <div className='main__container'>
//       {movieResult.map((movie, index) => (
//          <section className='main__card-container' key={index}>
//             <img
//                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                alt={movie.original_title}
//                className='main__card'
//             />
//             {/* <div className='main__card-descriptions'>
//          <span className='main__card-description'>
//             {movie.overview}
//          </span>
//       </div> */}
//             <div className='main__card-information'>
//                <span className='main__card-name'>{movie.title}</span>
//                <div className='main__card-details'>
//                   <span className='main__card-time'>
//                      {timeFormat(movie.release_date)}
//                   </span>
//                   <span className='main__card-detail'>
//                      <FcRating className='main__card-icon' />
//                      <span className='main__card-rating'>
//                         {movie.vote_average}
//                      </span>
//                   </span>
//                </div>
//             </div>
//          </section>
//       ))}
//    </div>
// ) : null}

export default Main
