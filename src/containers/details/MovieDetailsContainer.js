import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import MovieDetails from '../../components/details/MovieDetails'

function MovieDetailsContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<MovieDetails />
		</>
	)
}

export default MovieDetailsContainer
