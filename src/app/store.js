import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/movies/movieSlice'
import showReducer from '../features/shows/showSlice'
import animeReducer from '../features/anime/animeSlice'
import geolocationReducer from '../features/geolocation/geolocationSlice'

export const store = configureStore({
	reducer: {
		movie: movieReducer,
		show: showReducer,
		anime: animeReducer,
		geolocation: geolocationReducer,
	},
})
