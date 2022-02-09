import React, { useEffect } from 'react'
import './anime.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getPopularAnime } from '../../features/anime/animeSlice'
import { AiOutlineStar } from 'react-icons/ai'
import { FcRating } from 'react-icons/fc'
import Loading from '../loading/Loading'
import Rejected from '../rejected/Rejected'

function PopularAnime() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const animesSelector = useSelector(state => state.anime.popularAnime)
	const animeLoading = useSelector(state => state.anime.loading)

	const animes = animesSelector.data

	useEffect(() => {
		dispatch(getPopularAnime())
	}, [dispatch])

	return (
		<section className='anime'>
			<h2 className='anime__description'>Trending Anime</h2>
			{animeLoading ? (
				<Loading />
			) : (
				<div className='anime__container'>
					{animes ? (
						animes.map((anime, index) => (
							<section className='anime__card-container' key={index}>
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
										<span className='anime__card-time'>
											{anime.year}
										</span>
										<span className='anime__card-detail'>
											<FcRating className='anime__card-icon' />
											<span className='anime__card-rating'>
												{anime.rank}
											</span>
										</span>
									</div>
								</div>
							</section>
						))
					) : (
						<Rejected />
					)}
				</div>
			)}
		</section>
	)
}

export default PopularAnime
