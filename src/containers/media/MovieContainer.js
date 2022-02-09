import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Buttons from '../../components/buttons/Buttons'
import Sidebar from '../../components/sidebar/Sidebar'
import Movies from '../../components/movies/Movies'

function MovieContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Buttons />
			<Movies />
			<Sidebar />
		</>
	)
}

export default MovieContainer
