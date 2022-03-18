import React, { useEffect } from 'react'
import './details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails } from '../../features/movies/movieSlice'
import Youtube from 'react-youtube'

function MovieDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const movieDetails = useSelector(state => state.movie.movieDetails)

	useEffect(() => {
		dispatch(getMovieDetails(id))
	}, [dispatch, id])

	const renderTrailer = () => {
		const trailer = movieDetails?.videos?.results.find(
			video =>
				video?.name === 'Main Trailer' ||
				'Official Trailer' ||
				'Official Trailer 1',
		)

		return (
			<Youtube
				videoId={trailer?.key}
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
				{movieDetails?.videos ? renderTrailer() : null}
			</div>
			<div className='details__container'>
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
								{movieDetails.original_title}
							</h1>
							{movieDetails.genres?.map(genre => (
								<span className='details__genres' key={genre.id}>
									{genre.name}
								</span>
							))}
							<p className='details__tagline'>
								Tagline: {movieDetails.tagline}
							</p>
							<p className='details__release-date'>
								Release Date: {movieDetails.release_date}
							</p>

							<p className='details__countries'>
								Production Countries:
								{movieDetails.production_countries?.map(country => (
									<span
										className='details__country'
										key={country.name}>
										<span className='details__country' />
										{country.name}
									</span>
								))}
							</p>

							<p className='details__description'>
								<span className='details__overview'>Overview</span>
								{movieDetails.overview}
							</p>

							<div className='details__buttons'>
								<a
									href={movieDetails.homepage}
									target='_blank'
                           rel="noopener"
									className='details__button-homepage'>
									Movie Homepage
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MovieDetails
