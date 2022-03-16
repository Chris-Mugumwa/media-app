import React, { Suspense } from 'react'
import Loading from '../loading/Loading'
import { motion } from 'framer-motion'

const MainMovies = React.lazy(() => import('./MainMovies'))
const MainShows = React.lazy(() => import('./MainShows'))
const MainAnime = React.lazy(() => import('./MainAnime'))

function Main() {
	return (
		<Suspense fallback={<Loading />}>
			<motion.main
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='main'>
				<MainMovies />
				<MainShows />
				<MainAnime />
			</motion.main>
		</Suspense>
	)
}

export default Main
