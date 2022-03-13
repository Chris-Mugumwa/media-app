import React, { useState } from 'react'
import './buttons.scss'
import { Link } from 'react-router-dom'
import { buttonData } from './buttonData'

function Buttons() {
	return (
		<section className='buttons'>
			<div className='buttons__container'>
				{buttonData.map((button, index) => (
					<Link to={button.path} className='buttons__link' key={index}>
						<button className='buttons__button'>
							<span className='buttons__icon'>{button.icon}</span>
							<span className='button__name'>{button.name}</span>
						</button>
					</Link>
				))}
			</div>
		</section>
	)
}

export default Buttons
