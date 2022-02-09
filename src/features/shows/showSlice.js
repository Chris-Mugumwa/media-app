import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPopularShows = createAsyncThunk(
	'popularShows/getPopularShows',
	async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/tv/popular?api_key=69a8a5f5d8ff53eb47ca412ef26ae76f&language=en-US&page=1`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getTopRatedShows = createAsyncThunk(
	'getTopRatedShows',
	async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/tv/top_rated?api_key=69a8a5f5d8ff53eb47ca412ef26ae76f&language=en-US&page=1`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getShowSearch = createAsyncThunk(
	'showSearch/getShowSearch',
	async term => {
		const response = await fetch(`              
         https://api.themoviedb.org/3/search/tv?api_key=69a8a5f5d8ff53eb47ca412ef26ae76f&language=en-US&page=1&query=${term}&include_adult=false`)
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
	},
})

export default showSlice.reducer
