import React, { Suspense } from 'react'
import './anime.scss'
import Loading from '../loading/Loading'
import { motion } from 'framer-motion'

const PopularAnime = React.lazy(() => import('./PopularAnime'))

function Anime() {
	return (
		<Suspense fallback={<Loading />}>
			<motion.section
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				className='anime'>
				<PopularAnime />
			</motion.section>
		</Suspense>
	)
}

export default Anime
