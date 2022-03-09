import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPopularAnime = createAsyncThunk(
	'popularAnime/getPopularAnime',
	async () => {
		const response = await fetch(`https://api.jikan.moe/v4/top/anime`)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getRandomAnime = createAsyncThunk(
	'randomAnime/getRandomAnime',
	async () => {
		const response = await fetch(`https://api.jikan.moe/v4/random/anime`)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getAnimeDetails = createAsyncThunk(
	'animeDetails/getAnimeDetails',
	async mal_id => {
		const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getAnimeSeasons = createAsyncThunk(
	'animeSeasons/getAnimeRecommendations',
	async () => {
		const response = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const getAnimeGenres = createAsyncThunk(
	'animeGenres/getAnimeGenres',
	async () => {
		const response = await fetch(`https://api.jikan.moe/v4/genres/anime`)
		const formatResponse = response.json()
		return formatResponse
	},
)

export const getAnimeSearch = createAsyncThunk(
	'animeSearch/getAnimeSearch',
	async term => {
		const response = await fetch(
			`https://api.jikan.moe/v4/anime?q=${term}&order_by=title&sort=asc&limit=10&page=1`,
		)
		const formatResponse = await response.json()
		return formatResponse
	},
)

export const animeSlice = createSlice({
	name: 'anime',
	initialState: {
		popularAnime: [],
		randomAnime: [],
		animeSearch: [],
		animeDetails: {},
		animeSeasons: [],
		animeGenres: [],
		loading: false,
	},
	extraReducers: {
		[getPopularAnime.pending]: state => {
			state.loading = true
		},
		[getPopularAnime.fulfilled]: (state, action) => {
			state.popularAnime = action.payload
			state.loading = false
		},
		[getPopularAnime.rejected]: state => {
			state.loading = false
		},
		[getRandomAnime.pending]: state => {
			state.loading = true
		},
		[getRandomAnime.fulfilled]: (state, action) => {
			state.randomAnime = action.payload
			state.loading = false
		},
		[getRandomAnime.rejected]: state => {
			state.loading = false
		},
		[getAnimeSearch.pending]: state => {
			state.loading = true
		},
		[getAnimeSearch.fulfilled]: (state, action) => {
			state.animeSearch = action.payload
			state.loading = false
		},
		[getAnimeSearch.rejected]: state => {
			state.loading = false
		},
		[getAnimeDetails.pending]: state => {
			state.loading = true
		},
		[getAnimeDetails.fulfilled]: (state, action) => {
			state.animeDetails = action.payload
			state.loading = false
		},
		[getAnimeDetails.rejected]: state => {
			state.loading = false
		},
		[getAnimeSeasons.pending]: state => {
			state.loading = true
		},
		[getAnimeSeasons.fulfilled]: (state, action) => {
			state.animeSeasons = action.payload
			state.loading = false
		},
		[getAnimeSeasons.rejected]: state => {
			state.loading = false
		},
		[getAnimeGenres.pending]: state => {
			state.loading = true
		},
		[getAnimeGenres.fulfilled]: (state, action) => {
			state.animeGenres = action.payload
			state.loading = false
		},
		[getAnimeGenres.rejected]: state => {
			state.loading = false
		},
	},
})

export default animeSlice.reducer
