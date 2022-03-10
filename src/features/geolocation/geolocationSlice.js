import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getLocation = createAsyncThunk(
	'geolocation/getLocation',
	async () => {
		const response = await fetch('https://ipapi.co/json/')
		const formatResponse = await response.json()
		console.log(formatResponse)
		return formatResponse
	},
)

export const geolocationSlice = createSlice({
	name: 'geolocation',
	initialState: {
		location: [],
	},
	extraReducers: {
		[getLocation.pending]: state => {
			state.loading = true
		},
		[getLocation.fulfilled]: (state, action) => {
			state.location = action.payload
			state.loading = false
		},
		[getLocation.rejected]: state => {
			state.loading = false
		},
	},
})

export default geolocationSlice.reducer
