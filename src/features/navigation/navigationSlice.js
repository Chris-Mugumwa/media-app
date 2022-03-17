// import { createSlice } from '@reduxjs/toolkit'

// export const navigationSlice = createSlice({
// 	name: 'navigation',
// 	initialState: {
// 		menu: false,
// 		login: false,
// 		signup: false,
// 		signout: false,
// 	},
// 	reducers: {
// 		toggleMenu: state => {
// 			state.menu = !state.menu
// 		},
// 		toggleLogin: state => {
// 			state.login = !state.login
// 		},
// 		toggleSignup: state => {
// 			state.signup = !state.signup
// 		},
// 		toggleSignout: state => {
// 			state.signout = !state.signout
// 		},
// 	},
// })

// export const menuValue = () => {
// 	return async (dispatch, getState) => {
// 		const menu = getState().navigation.menu
// 		console.log(menu)
// 	}
// }
// export const loginValue = () => {
// 	return async (dispatch, getState) => {
// 		const login = getState().navigation.login
// 		console.log(login)
// 	}
// }

// export const { toggleMenu, toggleLogin, toggleSignup, toggleSignout } =
// 	navigationSlice.actions

// export default navigationSlice.reducer
