import {
	BiHome,
	BiBookmarkHeart,
	BiMovie,
	BiMoviePlay,
	BiCameraMovie,
} from 'react-icons/bi'

export const navigationData = [
	{
		id: 1,
		name: 'Home',
		icon: <BiHome />,
		path: '/',
	},
	{
		id: 2,
		name: 'Favourites',
		icon: <BiBookmarkHeart />,
		path: '/favourites',
	},
	{
		id: 3,
		name: 'Movies',
		path: '/movies',
		icon: <BiMovie />,
	},
	{
		id: 4,
		name: 'Shows',
		path: '/shows',
		icon: <BiCameraMovie />,
	},
	{
		id: 5,
		name: 'Anime',
		path: '/anime',
		icon: <BiMoviePlay />,
	},
]
