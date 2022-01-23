import React, {useEffect} from 'react'
import './main.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getMovies} from './mainSlice'

function Main() {
   const dispatch = useDispatch()
   const movies = useSelector(state => state.main.movies)

   useEffect(() => {
      dispatch(getMovies())
   }, [dispatch])
   return (
      <section className='main'>
         
      </section>
   )
}

export default Main
