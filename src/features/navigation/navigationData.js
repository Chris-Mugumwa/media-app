import { AiOutlineHome, AiOutlineHeart, AiOutlineEye, AiOutlineLogin } from 'react-icons/ai'

export const navigationData = [{
			id: 1,
			name: 'Home',
			icon: <AiOutlineHome />,
			path: '/',
			cName: 'menu__item',
		},
		{
			id: 2,
			name: 'Favorites',
			icon: <AiOutlineHeart />,
			path: '/favorites',
			cName: 'menu__item',
		},
		{
			id: 3,
			name: 'Must Watch',
			icon: <AiOutlineEye />,
			path: '/must-watch',
			cName: 'menu__item',
   },
]
