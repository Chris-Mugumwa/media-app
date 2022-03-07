import React, { Suspense } from 'react'
import Loading from '../loading/Loading'

const MainMovies = React.lazy(() => import('./MainMovies'))
const MainShows = React.lazy(() => import('./MainShows'))
const MainAnime = React.lazy(() => import('./MainAnime'))

function Main() {
	return (
		<Suspense fallback={<Loading />}>
			<main className='main'>
				<MainMovies />
				<MainShows />
				<MainAnime />
			</main>
		</Suspense>
	)
}

export default Main
