import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/movies/movieSlice'
import showReducer from '../features/shows/showSlice'
import animeReducer from '../features/anime/animeSlice'
import navigationReducer from '../features/navigation/navigationSlice'

export const store = configureStore({
	reducer: {
		movie: movieReducer,
		show: showReducer,
		anime: animeReducer,
		navigation: navigationReducer,
	},
})
