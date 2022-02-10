import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import AnimeDetails from '../../components/details/AnimeDetails'

function AnimeDetailsContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<AnimeDetails />
		</>
	)
}

export default AnimeDetailsContainer
