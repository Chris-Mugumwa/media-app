import React, { useState, useEffect } from 'react'
import './favourites.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieDetails } from '../../features/movies/movieSlice'
import { Link, useParams } from 'react-router-dom'
import { auth, db } from '../../firebase'
import { doc, onSnapshot, collection } from 'firebase/firestore'

function Favourites() {
	const [movieId, setMovieId] = useState('')
	const dispatch = useDispatch()
	const { id, mal_id } = useParams()
	const movieDetails = useSelector(state => state.movie.movieSearch)
	const user = auth?.currentUser
	const colRef = collection(db, 'users', `${user?.uid}`, 'favourites')

	const addMovie = () => {
		if (user) {
			onSnapshot(colRef, snapshot => {
				snapshot.docs.forEach(doc => {
					setMovieId(doc.id)
					console.log(movieId)
				})
			})
		}
	}

	return (
		<section>
			<h3>{movieDetails.name}</h3>
		</section>
	)
}

export default Favourites
