import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Details from '../../components/details/Details'

function DetailsContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Details />
		</>
	)
}

export default DetailsContainer
