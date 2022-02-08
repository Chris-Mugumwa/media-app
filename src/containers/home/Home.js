import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Buttons from '../../components/buttons/Buttons'
import Main from '../../components/main/Main'
import Sidebar from '../../components/sidebar/Sidebar'

function Home() {
	return (
		<>
			<Navigation />
			<Navigate />
			<Search />
			<Buttons />
			<Main />
			<Sidebar />
		</>
	)
}

export default Home
