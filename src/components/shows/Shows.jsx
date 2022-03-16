import React, { Suspense } from 'react'
import './shows.scss'
import Loading from '../loading/Loading'
import { motion } from 'framer-motion'

const PopularShows = React.lazy(() => import('./PopularShows'))
const TopRatedShows = React.lazy(() => import('./TopRatedShows'))

function Shows() {
	return (
		<Suspense fallback={<Loading />}>
			<motion.section
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='shows'>
				<PopularShows />
				<TopRatedShows />
			</motion.section>
		</Suspense>
	)
}

export default Shows
