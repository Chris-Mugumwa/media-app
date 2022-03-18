import React, { useState, Suspense } from 'react'
import './sidebar.scss'
import Loading from '../loading/Loading'

const SidebarMovies = React.lazy(() => import('./SidebarMovies'))
const SidebarShows = React.lazy(() => import('./SidebarShows'))
const SidebarAnime = React.lazy(() => import('./SidebarAnime'))

function Sidebar() {
	const [currentTab, setCurrentTab] = useState(1)

	const activeTab = index => {
		setCurrentTab(index)
	}

	return (
		<aside className='sidebar'>
			<nav className='sidebar__navigation'>
				<ul className='sidebar__list'>
					<li
						className={
							currentTab === 1
								? 'sidebar__item sidebar__current'
								: 'sidebar__item'
						}
						onClick={() => activeTab(1)}>
						Movies
					</li>
					<li
						className={
							currentTab === 2
								? 'sidebar__item sidebar__current'
								: 'sidebar__item'
						}
						onClick={() => activeTab(2)}>
						Shows
					</li>
					<li
						className={
							currentTab === 3
								? 'sidebar__item sidebar__current'
								: 'sidebar__item'
						}
						onClick={() => activeTab(3)}>
						Anime
					</li>
				</ul>

				<Suspense fallback={<Loading />}>
					<SidebarMovies currentTab={currentTab} />
					<SidebarShows currentTab={currentTab} />
					<SidebarAnime currentTab={currentTab} />
				</Suspense>
			</nav>
		</aside>
	)
}

export default Sidebar
