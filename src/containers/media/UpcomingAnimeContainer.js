import React from 'react'
import UpcomingAnime from '../../components/anime/UpcomingAnime'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Buttons from '../../components/buttons/Buttons'
import Sidebar from '../../components/sidebar/Sidebar'

function UpcomingAnimeContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Buttons />
			<UpcomingAnime />
			<Sidebar />
		</>
	)
}

export default UpcomingAnimeContainer
