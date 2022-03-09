import React, { Suspense } from 'react'
import './movies.scss'
import Loading from '../loading/Loading'

const PopularMovies = React.lazy(() => import('./PopularMovies'))
const UpcomingMovies = React.lazy(() => import('./UpcomingMovies'))
const TopRatedMovies = React.lazy(() => import('./TopRatedMovies'))

function Movies() {
	return (
		<section className='movies'>
			<Suspense fallback={<Loading />}>
				<PopularMovies />
				<UpcomingMovies />
				<TopRatedMovies />
			</Suspense>
		</section>
	)
}

export default Movies
