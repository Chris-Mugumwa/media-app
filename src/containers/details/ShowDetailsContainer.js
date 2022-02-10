import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import ShowDetails from '../../components/details/ShowDetails'

function ShowDetailsContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<ShowDetails />
		</>
	)
}

export default ShowDetailsContainer
