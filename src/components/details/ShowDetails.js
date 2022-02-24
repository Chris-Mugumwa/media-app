import React, { useEffect } from 'react'
import './details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getShowDetails } from '../../features/shows/showSlice'
import Loading from '../loading/Loading'
import FavouritesButton from '../favourites/FavouritesButton'
import { BiPlay } from 'react-icons/bi'

function ShowDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const showDetails = useSelector(state => state.show.showDetails)
	const imageUrl = 'https://image.tmdb.org/t/p/original/'

	console.log('Shows', showDetails)

	useEffect(() => {
		dispatch(getShowDetails(id))
	}, [dispatch, id])

	return (
		<section className='details'>
			{showDetails ? (
				<div
					className='details__container'
					style={{
						backgroundImage: `url(${imageUrl}${showDetails.backdrop_path})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
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
									{showDetails
										? showDetails.original_name
										: 'unavailable'}
								</h1>
								{showDetails.genres.map((genre, index) => (
									<span className='details__genres' key={index}>
										{genre.name}
									</span>
								))}
								<p className='details__tagline'>
									Tagline: {showDetails.tagline}
								</p>
								<p className='details__release-date'>
									Release Date: {showDetails.first_air_date}
								</p>
								<p className='details__companies'>
									Production Companies:
									{showDetails ? (
										showDetails.production_companies.map(
											(company, index) => (
												<span
													className='details__company'
													key={index}
												>
													<span className='details__company' />

													{company.name}
												</span>
											),
										)
									) : (
										<Loading />
									)}
								</p>

								<p className='details__countries'>
									Production Countries:
									{showDetails ? (
										showDetails.production_countries.map(
											(country, index) => (
												<span
													className='details__country'
													key={index}
												>
													<span className='details__country' />
													{country.name}
												</span>
											),
										)
									) : (
										<Loading />
									)}
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
										href={`https://www.youtube.com/results?search_query=${showDetails.original_name}+official+trailer`}
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

export default ShowDetails
