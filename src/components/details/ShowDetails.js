import React, { useEffect } from 'react'
import './details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getShowDetails } from '../../features/shows/showSlice'
import Youtube from 'react-youtube'
import FavouritesShowButton from '../favourites/FavouritesShowButton'
import { BiPlay } from 'react-icons/bi'

function ShowDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const showDetails = useSelector(state => state.show.showDetails)

	useEffect(() => {
		dispatch(getShowDetails(id))
	}, [dispatch, id])

	const renderTrailer = () => {
		const trailer = showDetails?.videos?.results.find(
			video => video?.name === 'Official Trailer',
		)
		console.log(trailer?.key)

		return (
			<Youtube
				videoId={trailer?.key}
				className={'details__youtube--player'}
				opts={{
					width: '100%',

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
				{showDetails?.videos ? renderTrailer() : null}
			</div>
			<div className='details__container'>
				<div className='details__content'>
					<div className='details__details'>
						<div className='details__card-container'>
							<img
								src={`https://image.tmdb.org/t/p/w500/${showDetails.poster_path}`}
								alt={showDetails.original_name}
								className='details__card'
							/>
						</div>
						<div className='details__information'>
							<h1 className='details__title'>
								{showDetails.original_name}
							</h1>
							{showDetails.genres?.map(genre => (
								<span className='details__genres' key={genre.id}>
									{genre.name}
								</span>
							))}
							<p className='details__tagline'>
								Tagline: {showDetails.tagline}
							</p>
							<p className='details__release-date'>
								Release Date: {showDetails.first_air_date}
							</p>

							<p className='details__countries'>
								Production Countries:
								{showDetails.production_countries?.map(country => (
									<span
										className='details__country'
										key={country.name}
									>
										<span className='details__country' />
										{country.name}
									</span>
								))}
							</p>

							<p className='details__seasons'>
								Seasons: {showDetails.number_of_seasons}
							</p>

							<p className='details__description'>
								<span className='details__overview'>Overview</span>
								{showDetails.overview}
							</p>

							<div className='details__buttons'>
								<a
									href={showDetails.homepage}
									target='_blank'
									className='details__button-homepage'
								>
									Show Homepage
								</a>

								<FavouritesShowButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ShowDetails
