import React, { useEffect } from 'react'
import './anime.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPopularAnime } from '../../features/anime/animeSlice'
import { FcRating } from 'react-icons/fc'
import { motion } from 'framer-motion'

function PopularAnime() {
	const dispatch = useDispatch()
	const animesSelector = useSelector(state => state.anime.popularAnime)
	const animes = animesSelector.data

	useEffect(() => {
		dispatch(getPopularAnime())
	}, [dispatch])

	return (
		<motion.section
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className='anime'>
			<h2 className='anime__description'>Trending Anime</h2>

			<div className='anime__container'>
				{animes?.map(anime => (
					<Link
						to={`/details/anime/${anime.mal_id}`}
						className='anime__card-container'
						key={anime.mal_id}>
						<img
							src={`${anime.images.jpg.image_url}`}
							alt={anime.title_english}
							className='anime__card'
						/>
						<div className='anime__card-information'>
							<span className='anime__card-name'>
								{anime.title_english
									? anime.title_english
									: anime.title}
							</span>
							<div className='anime__card-details'>
								<span className='anime__card-time'>{anime.year}</span>
								<span className='anime__card-detail'>
									<FcRating className='anime__card-icon' />
									<span className='anime__card-rating'>
										{anime.rank}
									</span>
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</motion.section>
	)
}

export default PopularAnime
