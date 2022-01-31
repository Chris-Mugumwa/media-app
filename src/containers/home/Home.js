import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Main from '../../components/main/Main'
import Sidebar from '../../components/sidebar/Sidebar'

function Home() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Main />
			<Sidebar />
		</>
	)
}

export default Home
