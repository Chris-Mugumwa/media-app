import React, { Suspense } from 'react'
import Loading from '../../components/loading/Loading'

const ShowDetails = React.lazy(() =>
	import('../../components/details/ShowDetails'),
)

function ShowDetailsContainer() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<ShowDetails />
			</Suspense>
		</>
	)
}

export default ShowDetailsContainer
