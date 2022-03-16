import React, { useEffect } from 'react'
import './main.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeSearch } from '../../features/anime/animeSlice'
import { FcRating } from 'react-icons/fc'

function MainAnime() {
	const dispatch = useDispatch()
	const animesSearch = useSelector(state => state.anime.animeSearch)
	const animeResult = animesSearch.data

	const animeText = 'The Movie'

	useEffect(() => {
		dispatch(getAnimeSearch(animeText))
	}, [dispatch, animeText])
	return (
		<>
			<h2 className='main__description'>Anime</h2>
			<div className='main__container'>
				{animeResult?.map(anime => (
					<Link
						to={`/details/anime/${anime.mal_id}`}
						className='main__card-container'
						key={anime.mal_id}>
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
								<span className='main__card-time'>{anime.year}</span>
								<span className='main__card-detail'>
									<FcRating className='main__card-icon' />
									<span className='main__card-rating'>
										{anime.rank}
									</span>
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}

export default MainAnime
