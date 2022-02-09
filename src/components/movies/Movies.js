import React from 'react'
import './movies.scss'
import PopularMovies from './PopularMovies'
import UpcomingMovies from './UpcomingMovies'
import TopRatedMovies from './TopRatedMovies'

function Movies() {
	return (
		<section className='movies'>
			<PopularMovies />
			<UpcomingMovies />
			<TopRatedMovies />
		</section>
	)
}

export default Movies
