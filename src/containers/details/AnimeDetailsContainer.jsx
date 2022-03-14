import React, { Suspense } from 'react'
import Loading from '../../components/loading/Loading'

const AnimeDetails = React.lazy(() =>
	import('../../components/details/AnimeDetails'),
)

function AnimeDetailsContainer() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<AnimeDetails />
			</Suspense>
		</>
	)
}

export default AnimeDetailsContainer
