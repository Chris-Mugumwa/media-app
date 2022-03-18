import React from 'react'
import './pagination.scss'
import { IoArrowRedoOutline, IoArrowUndoOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

function Pagination({ page, setPage }) {
	const nextPage = () => {
		setPage(prevState => prevState + 1)
	}

	const prevPage = () => {
		if (page === 1) {
			setPage(1)
		}
		setPage(prevState => prevState - 1)
	}

	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			Layout
			className='paginate'>
			<button className='paginate__button' onClick={() => prevPage()}>
				<IoArrowUndoOutline className='paginate__icon' />
				<h4 className='paginate__direction'>Previous Page</h4>
			</button>
			<button className='paginate__button' onClick={() => nextPage()}>
				<h4 className='paginate__direction'>Next Page</h4>
				<IoArrowRedoOutline className='paginate__icon' />
			</button>
		</motion.div>
	)
}

export default Pagination
