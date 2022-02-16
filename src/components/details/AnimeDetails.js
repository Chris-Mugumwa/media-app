import React, { useEffect } from 'react'
import './details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeDetails } from '../../features/anime/animeSlice'

function AnimeDetails() {
	const { mal_id } = useParams()
	const dispatch = useDispatch()
	const animeDetails = useSelector(state => state.anime.animeDetails)
	console.log('Anime', animeDetails)

	useEffect(() => {
		dispatch(getAnimeDetails(mal_id))
	}, [dispatch, mal_id])

	return <section className='details'>Hello World</section>
}

export default AnimeDetails
