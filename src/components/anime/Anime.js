import React, { useEffect } from 'react'
import './anime.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { timeFormat } from '../main/mainData'
import { getPopularAnime } from '../../features/anime/animeSlice'
import { AiOutlineStar } from 'react-icons/ai'
import { FcRating } from 'react-icons/fc'
import Loading from '../loading/Loading'
import Rejected from '../rejected/Rejected'

function Anime() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const animesSelector = useSelector(state => state.anime.popularAnime)
	const animeLoading = useSelector(state => state.anime.loading)

	const animes = animesSelector.data

	useEffect(() => {
		dispatch(getPopularAnime())
	}, [dispatch])

	return (
		<>
			<h2 className='main__description'>Trending Anime</h2>

			{animeLoading ? (
				<Loading />
			) : (
				<div className='main__container'>
					{animes ? (
						animes.map((anime, index) => (
							<section className='main__card-container' key={index}>
								<img
									src={`${anime.images.jpg.image_url}`}
									alt={anime.title_english}
									className='main__card'
								/>
								<div className='main__card-information'>
									<span className='main__card-name'>
										{anime.title_english
											? anime.title_english
											: anime.title}
									</span>
									<div className='main__card-details'>
										<span className='main__card-time'>
											{anime.year}
										</span>
										<span className='main__card-detail'>
											<FcRating className='main__card-icon' />
											<span className='main__card-rating'>
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
		</>
	)
}

export default Anime
