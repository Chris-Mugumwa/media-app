import {
	IoHomeOutline,
	IoTvOutline,
	IoPlayOutline,
	IoVideocamOutline,
} from 'react-icons/io5'

export const navigationData = [
	{
		id: 1,
		name: 'Home',
		icon: <IoHomeOutline />,
		path: '/',
	},
	{
		id: 3,
		name: 'Movies',
		path: '/movies',
		icon: <IoTvOutline />,
	},
	{
		id: 4,
		name: 'Shows',
		path: '/shows',
		icon: <IoVideocamOutline />,
	},
	{
		id: 5,
		name: 'Anime',
		path: '/anime',
		icon: <IoPlayOutline />,
	},
]

export const navigateData = [
	{
		name: 'Movies',
		path: '/movies',
		className: 'navigate__item',
	},
	{
		name: 'Shows',
		path: '/shows',
		className: 'navigate__item',
	},
	{
		name: 'Anime',
		path: '/anime',
		className: 'navigate__item',
	},
]

export const movieItems = [
	{
		id: 1,
		name: 'Popular',
		path: '/popular-movies',
		className: 'navigate__item',
	},
	{
		id: 2,
		name: 'Top Rated',
		path: '/top-rated-movies',
		className: 'navigate__item',
	},
	{
		id: 3,
		name: 'Upcoming',
		path: '/upcoming-movies',
		className: 'navigate__item',
	},
]

export const showItems = [
	{
		id: 1,
		name: 'Popular',
		path: '/popular-shows',
		className: 'navigate__item',
	},
	{
		id: 2,
		name: 'Top Rated',
		path: '/top-rated-shows',
		className: 'navigate__item',
	},
]

export const animeItems = [
	{
		id: 1,
		name: 'Popular',
		path: '/popular-anime',
		className: 'navigate__item',
	},
	{
		id: 2,
		name: 'Upcoming',
		path: '/upcoming-anime',
		className: 'navigate__item',
	},
]

export const buttonData = [
	{
		name: 'Movies',
		icon: <IoTvOutline />,
		path: '/movies',
	},
	{
		name: 'Shows',
		icon: <IoVideocamOutline />,
		path: '/shows',
	},
	{
		name: 'Anime',
		icon: <IoPlayOutline />,
		path: '/anime',
	},
]
export const timeFormat = value => {
	if (value) {
		let valueSplit = value.split('')
		let valueSlice = valueSplit.slice(0, 4)
		let valueJoin = valueSlice.join('')
		return valueJoin
	} else {
		return null
	}
}
