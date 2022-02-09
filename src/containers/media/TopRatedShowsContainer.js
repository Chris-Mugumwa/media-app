import React from 'react'
import './media.scss'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Buttons from '../../components/buttons/Buttons'
import Sidebar from '../../components/sidebar/Sidebar'
import TopRatedShows from '../../components/shows/TopRatedShows'

function TopRatedShowsContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Buttons />
			<TopRatedShows />
			<Sidebar />
		</>
	)
}

export default TopRatedShowsContainer
