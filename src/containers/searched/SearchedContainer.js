import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Buttons from '../../components/buttons/Buttons'
import Sidebar from '../../components/sidebar/Sidebar'
import Results from '../../components/main/Results'

function SearchedContainer() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Buttons />
			<Results />
			<Sidebar />
		</>
	)
}

export default SearchedContainer
