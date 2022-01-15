import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
   const location = useLocation()
   
	return (
		<div className='App'>
			<AnimatePresence exitBeforeEnter>
				<Switch key={location.pathname} location={location}>
					<h1>Hello world</h1>
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App
