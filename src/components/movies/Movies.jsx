import React, { Suspense } from 'react'
import './movies.scss'
import Loading from '../loading/Loading'
import { motion } from 'framer-motion'

const PopularMovies = React.lazy(() => import('./PopularMovies'))
const UpcomingMovies = React.lazy(() => import('./UpcomingMovies'))
const TopRatedMovies = React.lazy(() => import('./TopRatedMovies'))

function Movies() {
	return (
		<Suspense fallback={<Loading />}>
			<motion.section
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='movies'>
				<PopularMovies />
				<UpcomingMovies />
				<TopRatedMovies />
			</motion.section>
		</Suspense>
	)
}

export default Movies
