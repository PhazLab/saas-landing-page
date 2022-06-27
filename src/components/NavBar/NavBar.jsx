import React from 'react'
import LogoHasHome from '../../assets/logos/logohashome.png'
import Button from '../Button'
import './NavBar.css'

const NavBar = () => {
  return <nav>
    <div className="logoBrand">
        <img src={LogoHasHome} alt="HavLogo" />
    </div>
    <ul>
        <li className='navItem'><a href="#" className='active'>Home</a></li>
        <li className='navItem'><a href="#">About</a></li>
        <li className='navItem'><a href="#">Type Of House</a></li>
        <li className='navItem'><a href="#">Contact</a></li>
    </ul>
    <div>
      <Button text="Sign Up" />
    </div>
  </nav>
}


export default NavBar