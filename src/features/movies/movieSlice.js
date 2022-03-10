import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPopularMovies = createAsyncThunk(
	'popularMovies/getPopularMovies',
	async page => {
		const response = await fetch(
			`
         https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getTopRatedMovies = createAsyncThunk(
	'topRatedMovies/getTopRatedMovies',
	async page => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getMovieDiscover = createAsyncThunk(
	'movieDiscover/getMovieDiscover',
	async () => {
		const response = await fetch(
			`
         https://api.themoviedb.org/3/discover/movie?api_key=69a8a5f5d8ff53eb47ca412ef26ae76f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getUpcomingMovies = createAsyncThunk(
	'upcomingMovies/getUpcomingMovies',
	async page => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getMovieDetails = createAsyncThunk(
	'movieDetails/getMovieDetails',
	async id => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getMovieSearch = createAsyncThunk(
	'movieSearch/getMovieSearch',
	async (term, page) => {
		const response = await fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${term}&page=${page}&include_adult=false`)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const movieSlice = createSlice({
	name: 'movie',
	initialState: {
		popularMovies: [],
		topRatedMovies: [],
		upcomingMovies: [],
		movieSearch: [],
		movieDetails: {},
		movieDiscover: [],
		isLoading: false,
	},
	extraReducers: {
		[getPopularMovies.pending]: state => {
			state.isLoading = true
		},
		[getPopularMovies.fulfilled]: (state, action) => {
			state.popularMovies = action.payload
			state.isLoading = false
		},
		[getPopularMovies.rejected]: state => {
			state.isLoading = false
		},
		[getTopRatedMovies.pending]: state => {
			state.isLoading = true
		},
		[getTopRatedMovies.fulfilled]: (state, action) => {
			state.topRatedMovies = action.payload
			state.isLoading = false
		},
		[getTopRatedMovies.rejected]: state => {
			state.isLoading = false
		},
		[getUpcomingMovies.pending]: state => {
			state.isLoading = true
		},
		[getUpcomingMovies.fulfilled]: (state, action) => {
			state.upcomingMovies = action.payload
			state.isLoading = false
		},
		[getUpcomingMovies.rejected]: state => {
			state.isLoading = false
		},
		[getMovieSearch.pending]: state => {
			state.loading = true
		},
		[getMovieSearch.fulfilled]: (state, action) => {
			state.movieSearch = action.payload
			state.loading = false
		},
		[getMovieSearch.rejected]: state => {
			state.loading = false
		},
		[getMovieDiscover.pending]: state => {
			state.loading = true
		},
		[getMovieDiscover.fulfilled]: (state, action) => {
			state.movieDiscover = action.payload
			state.loading = false
		},
		[getMovieDiscover.rejected]: state => {
			state.loading = false
		},
		[getMovieDetails.pending]: state => {
			state.loading = true
		},
		[getMovieDetails.fulfilled]: (state, action) => {
			state.movieDetails = action.payload
			state.loading = false
		},
		[getMovieDetails.rejected]: state => {
			state.loading = false
		},
	},
})

export default movieSlice.reducer
