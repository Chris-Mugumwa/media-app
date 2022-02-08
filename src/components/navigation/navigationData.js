import {BiHome, BiBookmarkHeart, BiMovie, BiMoviePlay, BiCameraMovie } from 'react-icons/bi'

export const navigationData = [
	{
		name: 'Home',
		icon: <BiHome />,
		path: '/',
	},
	{
		name: 'Favorites',
		icon: <BiBookmarkHeart />,
		path: '/favorites',
	},
   {
		name: 'Movies',
		path: '/movies',
		icon: <BiMovie />,
	},
	{
		name: 'Shows',
		path: '/shows',
		icon: <BiCameraMovie />,
	},
	{
		name: 'Anime',
		path: '/anime',
		icon: <BiMoviePlay />,
	},
]
