import React, { useState } from 'react'
import './buttons.scss'
import { Link } from 'react-router-dom'
import { buttonData } from './buttonData'

function Buttons() {

	return (
		<section className='buttons'>
			<div className='buttons__container'>
				{buttonData.map((button, index) => (
					<button className='buttons__button' key={index}>
						<span className='buttons__icon'>{button.icon}</span>
						<span className='button__name'>{button.name}</span>
					</button>
				))}
			</div>
		</section>
	)
}

export default Buttons
