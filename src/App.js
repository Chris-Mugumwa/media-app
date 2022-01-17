import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './features/home/Home'


function App() {
   const location = useLocation()
   
	return (
		<div className='app'>
			<AnimatePresence exitBeforeEnter>
            <Routes>
					<Route path='/' exact element={<Home />} />
            </Routes>
			</AnimatePresence>
		</div>
	)
}

export default App
