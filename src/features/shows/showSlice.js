import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPopularShows = createAsyncThunk(
	'popularShows/getPopularShows',
	async page => {
		const response = await fetch(
			`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getTopRatedShows = createAsyncThunk(
	'getTopRatedShows',
	async page => {
		const response = await fetch(
			`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getShowDetails = createAsyncThunk(
	'showDetails/getShowDetails',
	async id => {
		const response = await fetch(
			`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&append_to_response=videos&language=en-US`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getShowDiscover = createAsyncThunk(
	'showDiscover/getShowDiscover',
	async () => {
		const response = await fetch(
			`
         https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getShowSearch = createAsyncThunk(
	'showSearch/getShowSearch',
	async (term, page) => {
		const response = await fetch(`              
         https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}&query=${term}&include_adult=false`)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const showSlice = createSlice({
	name: 'show',
	initialState: {
		popularShows: [],
		topRatedShows: [],
		showSearch: [],
		showDetails: {},
		showDiscover: [],
		isLoading: false,
	},
	extraReducers: {
		[getPopularShows.pending]: state => {
			state.isLoading = true
		},
		[getPopularShows.fulfilled]: (state, action) => {
			state.popularShows = action.payload
			state.isLoading = false
		},
		[getPopularShows.rejected]: state => {
			state.isLoading = false
		},
		[getTopRatedShows.pending]: state => {
			state.isLoading = true
		},
		[getTopRatedShows.fulfilled]: (state, action) => {
			state.topRatedShows = action.payload
			state.isLoading = false
		},
		[getTopRatedShows.rejected]: state => {
			state.isLoading = false
		},
		[getShowSearch.pending]: state => {
			state.loading = true
		},
		[getShowSearch.fulfilled]: (state, action) => {
			state.showSearch = action.payload
			state.loading = false
		},
		[getShowSearch.rejected]: state => {
			state.loading = false
		},
		[getShowDetails.pending]: state => {
			state.loading = true
		},
		[getShowDetails.fulfilled]: (state, action) => {
			state.showDetails = action.payload
			state.loading = false
		},
		[getShowDetails.rejected]: state => {
			state.loading = false
		},
		[getShowDiscover.pending]: state => {
			state.loading = true
		},
		[getShowDiscover.fulfilled]: (state, action) => {
			state.showDiscover = action.payload
			state.loading = false
		},
		[getShowDiscover.rejected]: state => {
			state.loading = false
		},
	},
})

export default showSlice.reducer
