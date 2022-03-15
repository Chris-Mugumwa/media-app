import React, { Suspense } from 'react'
import Loading from '../loading/Loading'

const FavouriteMovies = React.lazy(() => import('./FavouriteMovies'))

function Favourites() {
	return (
		<Suspense fallback={<Loading />}>
			<section className='favourites'>
				<FavouriteMovies />
			</section>
		</Suspense>
	)
}

export default Favourites
