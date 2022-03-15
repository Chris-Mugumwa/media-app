import React, { useState, useEffect } from 'react'
import './favourites.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getFavouriteMovies } from '../../features/movies/movieSlice'
import { Link, useParams } from 'react-router-dom'
import { auth, db } from '../../firebase'
import { doc, onSnapshot, collection } from 'firebase/firestore'

function FavouriteMovies() {
	const [movieData, setMovieData] = useState([])
	const dispatch = useDispatch()
	const { id } = useParams()
	const favouriteMovies = useSelector(state => state.movie.favouriteMovies)
	const user = auth?.currentUser
	const colRef = collection(db, 'users', `${user?.uid}`, 'favouriteMovies')

	useEffect(() => {
		onSnapshot(colRef, snapshot => {
			snapshot.forEach(doc => {
				movieData.push({ ...doc.data() })
				console.log(movieData)
			})
		})
	}, [])

	console.log(favouriteMovies)

	return <section>{/* <h3>{favouriteMovies.name}</h3> */}</section>
}

export default FavouriteMovies
