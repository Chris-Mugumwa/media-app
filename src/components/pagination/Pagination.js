import React, { useState } from 'react'
import './pagination.scss'
import { paginationData } from './paginationData'

function Pagination() {
	const [selectedPage, setSelectedPage] = useState(1)

	const selectPageClick = page => {
		setSelectedPage(page.number)
		console.log(selectedPage)
	}

	return (
		<ul className='pagination'>
			{paginationData.map(page => (
				<li
					className='pagination__page'
					key={page.number}
					onClick={() => selectPageClick}
				>
					{page.number}
				</li>
			))}
		</ul>
	)
}

export default Pagination
