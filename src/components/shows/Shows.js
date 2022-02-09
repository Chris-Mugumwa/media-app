import React from 'react'
import './shows.scss'
import PopularShows from './PopularShows'
import TopRatedShows from './TopRatedShows'

function Shows() {
	return (
		<section className='shows'>
			<PopularShows />
			<TopRatedShows />
		</section>
	)
}

export default Shows
