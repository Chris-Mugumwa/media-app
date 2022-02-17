import React, { useEffect } from 'react'
import './details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeDetails } from '../../features/anime/animeSlice'
import Loading from '../loading/Loading'
import FavouritesButton from '../favourites/FavouritesButton'
import { BiPlay } from 'react-icons/bi'

function AnimeDetails() {
	const { mal_id } = useParams()
	const dispatch = useDispatch()
	const anime = useSelector(state => state.anime.animeDetails)
	const animeDetails = anime.data
	console.log('Anime', animeDetails)

	useEffect(() => {
		dispatch(getAnimeDetails(mal_id))
	}, [dispatch, mal_id])

	return (
		<section className='details'>
			{animeDetails ? (
				<div
					className='details__container'
					style={{
						backgroundImage: `url(${animeDetails.images.webp.large_image_url})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='details__content'>
						<div className='details__details'>
							<div className='details__card-container'>
								<img
									src={`${animeDetails.images.jpg.image_url}`}
									alt={animeDetails.title}
									className='details__card'
								/>
							</div>
							<div className='details__information'>
								<h1 className='details__title'>
									{animeDetails.title_english
										? animeDetails.title_english
										: animeDetails.title}
								</h1>
								{animeDetails.genres.map((genre, index) => (
									<span className='details__genres' key={index}>
										{genre.name}
									</span>
								))}
								<p className='details__tagline'>
									Tagline: {animeDetails.status}
								</p>
								<p className='details__release-date'>
									Release Date: {animeDetails.year}
								</p>
								<p className='details__companies'>
									Producers:
									{animeDetails ? (
										animeDetails.producers.map((company, index) => (
											<span className='details__company' key={index}>
												<span className='details__company' />

												{company.name}
											</span>
										))
									) : (
										<Loading />
									)}
								</p>

								<p className='details__countries'>
									Studios:
									{animeDetails ? (
										animeDetails.studios.map((studio, index) => (
											<span className='details__country' key={index}>
												<span className='details__country' />
												{studio.name}
											</span>
										))
									) : (
										<Loading />
									)}
								</p>

								<p className='details__seasons'>
									Season: {animeDetails.season}
								</p>

								<p className='details__description'>
									<span className='details__overview'>Overview</span>
									{animeDetails.synopsis}
								</p>

								<div className='details__buttons'>
									<a
										href={animeDetails.trailer.url}
										target='_blank'
										className='details__link'
									>
										<BiPlay className='details__button-icon' />
										<span>Watch Trailer</span>
									</a>

									<FavouritesButton />
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</section>
	)
}

export default AnimeDetails
