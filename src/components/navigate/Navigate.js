import React, { useState } from 'react'
import './navigate.scss'
import { Link } from 'react-router-dom'
import {
	navigateData,
	movieItems,
	showItems,
	animeItems,
} from './navigateData.js'
import { HiChevronDown } from 'react-icons/hi'

function Navigate() {
	const [movieHover, setMovieHover] = useState(false)
	const [showHover, setShowHover] = useState(false)
	const [animeHover, setAnimeHover] = useState(false)

	const handleMovieHover = () => setMovieHover(!movieHover)
	const handleShowHover = () => setShowHover(!showHover)
	const handleAnimeHover = () => setAnimeHover(!animeHover)

	const leaveMovieHover = () => setMovieHover(!movieHover)
	const leaveShowHover = () => setShowHover(!showHover)
	const leaveAnimeHover = () => setAnimeHover(!animeHover)

	return (
		<section className='navigate'>
			<nav className='navigate__navigation'>
				<Link to='/' className='navigate__home navigate__link'>
					<h4 className='navigate__home-text'>Home</h4>
				</Link>

				<ul className='navigate__list'>
					<li className='navigate__item'>
						<Link
							to='/movies'
							className='navigate__link'
							onMouseEnter={handleMovieHover}
							onMouseLeave={leaveMovieHover}
						>
							Movies
							<HiChevronDown className='navigate__icon' />
							<ul
								className={
									movieHover
										? 'navigate__dropdown-show-movies'
										: 'navigate__dropdown'
								}
							>
								{movieItems.map(item => (
									<Link
										to={item.path}
										className='navigate__dropdown-link'
										key={item.id}
									>
										{item.name}
									</Link>
								))}
							</ul>
						</Link>
					</li>
				</ul>

				<ul className='navigate__list'>
					<li className='navigate__item'>
						<Link
							to='/shows'
							className='navigate__link'
							onMouseEnter={handleShowHover}
							onMouseLeave={leaveShowHover}
						>
							Shows
							<HiChevronDown className='navigate__icon' />
							<ul
								className={
									showHover
										? 'navigate__dropdown-show-shows'
										: 'navigate__dropdown'
								}
							>
								{showItems.map(item => (
									<Link
										to={item.path}
										className='navigate__dropdown-link'
										key={item.id}
									>
										{item.name}
									</Link>
								))}
							</ul>
						</Link>
					</li>
				</ul>

				<ul className='navigate__list'>
					<li className='navigate__item'>
						<Link
							to='/anime'
							className='navigate__link'
							onMouseEnter={handleAnimeHover}
							onMouseLeave={leaveAnimeHover}
						>
							Anime
							<HiChevronDown className='navigate__icon' />
							<ul
								className={
									animeHover
										? 'navigate__dropdown-show-anime'
										: 'navigate__dropdown'
								}
							>
								{animeItems.map(item => (
									<Link
										to={item.path}
										className='navigate__dropdown-link'
										key={item.id}
									>
										{item.name}
									</Link>
								))}
							</ul>
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default Navigate
