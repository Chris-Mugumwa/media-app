import React from 'react'
import PopularAnime from '../../components/anime/PopularAnime'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Buttons from '../../components/buttons/Buttons'
import Sidebar from '../../components/sidebar/Sidebar'
import Anime from '../../components/anime/Anime'

function PopularAnimeContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Buttons />
			<PopularAnime />
			<Sidebar />
		</>
	)
}

export default PopularAnimeContainer
