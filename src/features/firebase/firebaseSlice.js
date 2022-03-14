// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import {useDispatch} from 'react-redux'
// import { auth, db } from '../../firebase'
// import {
// 	signInWithPopup,
// 	GoogleAuthProvider,
// 	createUserWithEmailAndPassword,
// } from 'firebase/auth'
// import { doc, setDoc } from 'firebase/firestore'

// const provider = new GoogleAuthProvider()

// export const googleSignup = createAsyncThunk(
//    'firebase/googleSignup',
//    signInWithPopup(auth, provider)
//       .then(result => {
//          const user = result.user

//          try {
//             const usersRef = doc(db, 'users', `${user.uid}`)
//             setDoc(usersRef, {
//                id: user.uid,
//                displayName: user.displayName,
//                email: user.email,
//                photo: user.photoURL,
//             })
//          } catch (error) {
//             console.error('Error adding document: ', error)
//          }
//    }) .catch(error => console.log('Error has occurred', error))
// )

// export const formSignup = createAsyncThunk(
//    'firebase/formSignup',
//    async (values) => {
//       createUserWithEmailAndPassword(
//          auth,
//          values.email,
//          values.password,
//       )
//          .then(userCredential => {
//             const user = userCredential.user
//             console.log(user)

//             try {
//                const usersRef = doc(db, 'users', `${user.uid}`)
//                setDoc(usersRef, {
//                   id: user.uid,
//                   displayName: values.name,
//                   email: values.email,
//                   photo: '',
//                })
//                console.log(
//                   'Document written with ID: ',
//                   usersRef.id,
//                )
//             } catch (error) {
//                console.error('Error adding document: ', error)
//             }
//             setOpenSignup(false)
//          })
//          .catch(error => {
//             const errorCode = error.code
//             const errorMessage = error.message
//             console.log(errorCode)
//             console.log(errorMessage)
//          })
//    }
// )

// export const firebaseSlice = createSlice({
// 	name: 'firebase',
//    initialState: {
// 		currentUser: auth.currentUser,
//       userUid: auth.currentUser.uid,
//       google: [],
//       initialValues: { name: '', email: '', password: '' }
// 	},
// 	reducers: {},
//    extraReducers: {
//       [googleSignup.fulfilled]: (state, action) => {
//          state.google = action.payload
//       }
//    },
// })

// export const currentState = (id) => {
//    return async (dispatch, getState) => {
//       const currState = getState().firebase
//       console.log(currState)
//    }
// }

// export default firebaseSlice.reducer
