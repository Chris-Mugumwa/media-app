import React, { Suspense } from 'react'
import Loading from '../../components/loading/Loading'

const MovieDetails = React.lazy(() =>
	import('../../components/details/MovieDetails'),
)

function MovieDetailsContainer() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<MovieDetails />
			</Suspense>
		</>
	)
}

export default MovieDetailsContainer
