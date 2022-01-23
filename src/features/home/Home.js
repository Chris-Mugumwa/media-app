import React from 'react'
import Navigation from '../navigation/Navigation'
import Navigate from '../navigate/Navigate'
import Search from '../search/Search'
import Main from '../main/Main'
import Sidebar from '../sidebar/Sidebar'

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
