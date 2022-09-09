import React from 'react'
import Logo from '../../assets/logo.png'

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
       <h1 className='logo'>Carl<span className='logox'>X</span>alin</h1>
       <ul className='headerMenu'>
           <li>Home</li>
           <li>About</li>
           <li>Services</li>
           <li>Testimonial</li>
       </ul>
    </div>
  )
}

export default Header