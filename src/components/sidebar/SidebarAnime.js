import React, { useEffect } from 'react'
import './sidebar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAnimeSeasons } from '../../features/anime/animeSlice'
import { FcRating } from 'react-icons/fc'

function SidebarAnime({ currentTab }) {
	const dispatch = useDispatch()
	const discoverAnime = useSelector(state => state.anime.animeSeasons)
	const animes = discoverAnime.data

	useEffect(() => {
		dispatch(getAnimeSeasons())
	}, [dispatch])

	return (
		<>
			<section className='sidebar__section sidebar__section-anime'>
				{animes?.map(anime => (
					<Link
						to={`/details/anime/${anime.mal_id}`}
						className={
							currentTab === 3
								? 'sidebar__container'
								: 'sidebar__not-active'
						}
						key={anime.mal_id}
					>
						<img
							src={anime.images.jpg.image_url}
							alt={
								anime.title_english ? anime.title_english : anime.title
							}
							className='sidebar__image'
						/>
						<div className='sidebar__information-container'>
							<h3 className='sidebar__title'>
								{anime.title_english
									? anime.title_english
									: anime.title}
							</h3>
							<p className='sidebar__description'>
								{anime.synopsis ? anime.synopsis : 'unavailable'}
							</p>
							<div className='sidebar__details'>
								<span className='sidebar__time'>
									{anime.year ? anime.year : 'year'}
								</span>
								<span className='sidebar__detail'>
									<FcRating className='sidebar__icon' />
									<span className='sidebar__time'>{anime.status}</span>
								</span>
							</div>
						</div>
					</Link>
				))}
			</section>
		</>
	)
}

export default SidebarAnime
