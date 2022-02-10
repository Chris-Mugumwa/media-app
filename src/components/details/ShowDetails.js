import React, { useEffect } from 'react'
import './details.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getShowDetails } from '../../features/shows/showSlice'

function ShowDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const showDetails = useSelector(state => state.show.showDetails)
	console.log('Shows', showDetails)

	useEffect(() => {
		dispatch(getShowDetails(id))
	}, [dispatch, id])

	return <section className='details'>Hello World</section>
}

export default ShowDetails
