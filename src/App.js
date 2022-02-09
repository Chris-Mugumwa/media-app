import React from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './containers/home/Home'
// import Searched from './containers/searched/Searched'
import Signup from './components/auth/signup/Signup'
import Login from './components/auth/login/Login'
import MovieContainer from './containers/media/MovieContainer'
import ShowContainer from './containers/media/ShowContainer'
import AnimeContainer from './containers/media/AnimeContainer'
import PopularMoviesContainer from './containers/media/PopularMoviesContainer'
import UpcomingMoviesContainer from './containers/media/UpcomingMoviesContainer'
import TopRatedMoviesContainer from './containers/media/TopRatedMoviesContainer'
import PopularShowsContainer from './containers/media/PopularShowsContainer'
import TopRatedShowsContainer from './containers/media/TopRatedShowsContainer'
import PopularAnimeContainer from './containers/media/PopularAnimeContainer'
import DetailsContainer from './containers/details/DetailsContainer'
import Favourites from './components/favourites/Favourites'

function App() {
	const location = useLocation()

	return (
		<div className='app'>
			<AnimatePresence exitBeforeEnter>
				<Routes location={location}>
					<Route path='/' exact element={<Home />} />
					{/* <Route path='/searched' exact element={<Searched />} /> */}
					<Route path='/sign-up' exact element={<Signup />} />
					<Route path='/login' exact element={<Login />} />
					<Route path='/movies' exact element={<MovieContainer />} />
					<Route path='/shows' exact element={<ShowContainer />} />
					<Route path='/anime' exact element={<AnimeContainer />} />
					<Route
						path='/popular-movies'
						exact
						element={<PopularMoviesContainer />}
					/>
					<Route
						path='/upcoming-movies'
						exact
						element={<UpcomingMoviesContainer />}
					/>
					<Route
						path='/top-rated-movies'
						exact
						element={<TopRatedMoviesContainer />}
					/>
					<Route
						path='/popular-shows'
						exact
						element={<PopularShowsContainer />}
					/>
					<Route
						path='/top-rated-shows'
						exact
						element={<TopRatedShowsContainer />}
					/>
					<Route
						path='/popular-anime'
						exact
						element={<PopularAnimeContainer />}
					/>
					<Route
						path='/details/:omdbID'
						exact
						element={<DetailsContainer />}
					/>
					<Route path='/favourites' exact element={<Favourites />} />
				</Routes>
			</AnimatePresence>
		</div>
	)
}

export default App
