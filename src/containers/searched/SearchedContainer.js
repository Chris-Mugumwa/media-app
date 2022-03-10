import React, { Suspense } from 'react'
import Loading from '../../components/loading/Loading'

const Searched = React.lazy(() => import('../../components/main/Searched'))

function SearchedContainer() {
	return (
		<Suspense fallback={<Loading />}>
			<Searched />
		</Suspense>
	)
}

export default SearchedContainer
