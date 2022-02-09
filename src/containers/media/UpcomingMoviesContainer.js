import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Buttons from '../../components/buttons/Buttons'
import Sidebar from '../../components/sidebar/Sidebar'
import UpcomingMovies from '../../components/movies/UpcomingMovies'

function UpcomingMoviesContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Buttons />
			<UpcomingMovies />
			<Sidebar />
		</>
	)
}

export default UpcomingMoviesContainer
