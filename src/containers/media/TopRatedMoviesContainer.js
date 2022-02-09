import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Buttons from '../../components/buttons/Buttons'
import Sidebar from '../../components/sidebar/Sidebar'
import TopRatedMovies from '../../components/movies/TopRatedMovies'

function TopRatedMoviesContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Buttons />
			<TopRatedMovies />
			<Sidebar />
		</>
	)
}

export default TopRatedMoviesContainer
