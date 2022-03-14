import React from 'react'
import './loading.scss'
import { ScaleLoader } from 'react-spinners'

function Loading() {
	return (
		<section className='loading'>
			<ScaleLoader color={'#F0EBD8'} className='loading__icon' />
		</section>
	)
}

export default Loading
