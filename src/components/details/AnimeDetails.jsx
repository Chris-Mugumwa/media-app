import React, { useEffect } from 'react'
import './details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeDetails } from '../../features/anime/animeSlice'
import FavouritesAnimeButton from '../favourites/FavouritesAnimeButton'
import Youtube from 'react-youtube'
import { BiPlay } from 'react-icons/bi'

function AnimeDetails() {
	const { mal_id } = useParams()
	const dispatch = useDispatch()
	const anime = useSelector(state => state.anime.animeDetails)
	const animeDetails = anime.data
	console.log(animeDetails)

	useEffect(() => {
		dispatch(getAnimeDetails(mal_id))
	}, [dispatch, mal_id])

	const renderTrailer = () => {
		return (
			<Youtube
				videoId={animeDetails?.trailer?.youtube_id}
				className={'details__youtube--player'}
				opts={{
					width: '100%',
					borderRadius: '12px',
					overflow: 'hidden',

					playerVars: {
						autoplay: 1,
					},
				}}
			/>
		)
	}

	return (
		<section className='details'>
			<div className='details__youtube'>
				{animeDetails?.trailer ? renderTrailer() : null}
			</div>
			<div className='details__content'>
				<div className='details__container'>
					<div className='details__details'>
						<div className='details__card-container'>
							<img
								src={`${animeDetails?.images.jpg.image_url}`}
								alt={animeDetails?.title}
								className='details__card'
							/>
						</div>
						<div className='details__information'>
							<h1 className='details__title'>
								{animeDetails?.title_english
									? animeDetails?.title_english
									: animeDetails?.title}
							</h1>
							{animeDetails?.genres?.map(genre => (
								<span className='details__genres' key={genre.mal_id}>
									{genre.name}
								</span>
							))}
							<p className='details__tagline'>
								Tagline: {animeDetails?.status}
							</p>
							<p className='details__release-date'>
								Release Date: {animeDetails?.year}
							</p>
							<p className='details__companies'>
								Producers:
								{animeDetails?.producers?.map(company => (
									<span
										className='details__company'
										key={company.mal_id}>
										<span className='details__company' />

										{company.name}
									</span>
								))}
							</p>

							<p className='details__countries'>
								Studios:
								{animeDetails?.studios?.map(studio => (
									<span
										className='details__country'
										key={studio.mal_id}>
										<span className='details__country' />
										{studio.name}
									</span>
								))}
							</p>
							<p className='details__seasons'>
								Season: {animeDetails?.season}
							</p>

							<p className='details__description'>
								<span className='details__overview'>Overview</span>
								{animeDetails?.synopsis}
							</p>

							<div className='details__buttons'>
								<a
									href={animeDetails?.url}
									target='_blank'
									className='details__button-homepage'>
									My Anime List
								</a>
								<FavouritesAnimeButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AnimeDetails
