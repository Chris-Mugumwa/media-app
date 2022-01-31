import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Navigate from '../../components/navigate/Navigate'
import Search from '../../components/search/Search'
import Results from '../../components/main/Results'
import Sidebar from '../../components/sidebar/Sidebar'

function Searched() {
   return (
      <>
      	<Navigation />
			<Navigate />
			<Search />
			<Results />
			<Sidebar />
      </>
   )
}

export default Searched
