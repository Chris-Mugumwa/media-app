import React from 'react'
import './navigation.scss'
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function Navigation() {
   return (
      <div className='navigation'>
         <img src={process.env.PUBLIC_URL + 'assets/icon.svg'} alt='application icon' className='navigation__icon' />

         <div className='navigation__hamburger-container'>
            <HiOutlineMenuAlt2 className='navigation__hamburger' />
         </div>

         <div className='navigation__buttons'>
            <button className='navigation__button navigation__login'>Login</button>
            <button className='navigation__button navigation__sign-in'>Sign Up</button>
         </div>

      </div>
   )
}

export default Navigation
