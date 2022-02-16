import React, { useEffect } from 'react'
import './details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails } from '../../features/movies/movieSlice'
import Loading from '../loading/Loading'
import FavouritesButton from '../favourites/FavouritesButton'
import { FcRating } from 'react-icons/fc'
import { BiPlay } from 'react-icons/bi'

function MovieDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const movieDetails = useSelector(state => state.movie.movieDetails)
	const imageUrl = 'https://image.tmdb.org/t/p/original/'
	console.log('Movies', movieDetails)

	useEffect(() => {
		dispatch(getMovieDetails(id))
	}, [dispatch, id])

	return (
		<section className='details'>
			{movieDetails ? (
				<div
					className='details__container'
					style={{
						backgroundImage: `url(${imageUrl}${movieDetails.backdrop_path})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='details__content'>
						<div className='details__details'>
							<div className='details__card-container'>
								<img
									src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
									alt={movieDetails.original_title}
									className='details__card'
								/>
							</div>
							<div className='details__information'>
								<h1 className='details__title'>
									{movieDetails
										? movieDetails.original_title
										: 'Nothing'}
								</h1>
								{movieDetails.genres.map((genre, index) => (
									<span className='details__genres' key={index}>
										{genre.name}
									</span>
								))}
								<p className='details__tagline'>
									Tagline: {movieDetails.tagline}
								</p>
								<p className='details__release-date'>
									Release Date: {movieDetails.release_date}
								</p>
								<p className='details__companies'>
									Production Companies:
									{movieDetails ? (
										movieDetails.production_companies.map(
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
									{movieDetails ? (
										movieDetails.production_countries.map(
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

								<p className='details__description'>
									<span className='details__overview'>Overview</span>
									{movieDetails.overview}
								</p>

								<div className='details__buttons'>
									<a
										href={`https://www.youtube.com/results?search_query=${movieDetails.original_title}+official+trailer`}
										target='_blank'
										className='details__link'
									>
										<button className='details__button'>
											<BiPlay className='details__button-icon' />
											<span>Watch Trailer</span>
										</button>
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

export default MovieDetails
