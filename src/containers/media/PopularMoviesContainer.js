import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Buttons from '../../components/buttons/Buttons'
import Sidebar from '../../components/sidebar/Sidebar'
import PopularMovies from '../../components/movies/PopularMovies'

function PopularMoviesContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Buttons />
			<PopularMovies />
			<Sidebar />
		</>
	)
}

export default PopularMoviesContainer
