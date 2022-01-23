import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import axios from 'axios'

export const getMovies = createAsyncThunk(
   'movies/getMovies',
   async () => {
      const response = await fetch(`https://imdb-api.com/en/API/Title/${process.env.REACT_APP_IMDB_API_KEY}/tt1375666/FullActor,Posters,Images,Ratings,`)
      const formatResponse = await response.json()
      console.log(formatResponse)
      return formatResponse
   }
)

export const mainSlice = createSlice({
   name: 'main',
   initialState: {
      movies: [],
      isLoading: false,
   },
   extraReducers: {
      [getMovies.pending]: state => {
         state.isLoading = true
      },
      [getMovies.fulfilled]: (state, action) => {
         state.movies = action.payload
         state.isLoading = false
         console.log('successful')
      },
      [getMovies.rejected]: (state) => {
         state.isLoading = false
         console.log('rejected')
      }
   }
})

export default mainSlice.reducer