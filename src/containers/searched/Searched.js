import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Results from '../../components/main/Results'
import Sidebar from '../../components/sidebar/Sidebar'

function Searched({ term }) {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search term={term} />
			<Results />
			<Sidebar />
		</>
	)
}

export default Searched
