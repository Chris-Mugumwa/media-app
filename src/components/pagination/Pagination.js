import React from 'react'
import './pagination.scss'
import { paginationData } from './paginationData'

function Pagination({ setPage }) {
	const selectPageClick = page => {
		setPage(page)
	}

	return (
		<ul className='pagination'>
			{paginationData.map(pagination => (
				<li
					className='pagination__page'
					key={pagination.number}
					onClick={event => selectPageClick(event.target.textContent)}
				>
					{pagination.number}
				</li>
			))}
		</ul>
	)
}

export default Pagination
