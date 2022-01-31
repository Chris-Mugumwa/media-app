import React from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './containers/home/Home'
import Searched from './containers/searched/Searched'
import Signup from './components/auth/signup/Signup'
import Login from './components/auth/login/Login'
import Movies from './components/movies/Movies'
import Shows from './components/shows/Shows'
import Anime from './components/anime/Anime'
import Details from './components/details/Details'
import Favourites from './components/favourites/Favourites'

function App() {
   const location = useLocation()
   
	return (
		<div className='app'>
			<AnimatePresence exitBeforeEnter>
            <Routes location={location}>
               <Route path='/' exact element={<Home />} />
               <Route path='/searched' exact element={<Searched />} />
               <Route path='/sign-up' exact element={<Signup />} />
               <Route path='/login' exact element={<Login />} />
               <Route path='/movies' exact element={<Movies />} />
               <Route path='/shows' exact element={<Shows />} />
               <Route path='/anime' exact element={<Anime />} />
               <Route path='/details' exact element={<Details />} />
               <Route path='/favourites' exact element={<Favourites />} />
            </Routes>
			</AnimatePresence>
		</div>
	)
}

export default App
