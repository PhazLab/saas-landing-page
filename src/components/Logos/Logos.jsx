import React from 'react'
import LogoItems from './LogoItems'
import Hoolie from './Logos/Hoolie.png'
import Lyft from './Logos/Lyft.png'
import Pypire from './Logos/Pypire.png'
import Stripe from './Logos/Stripe.png'
import AWS from './Logos/AWS.png'
import Reddit from './Logos/Reddit.png'
import './Logos.css'

const Logos = () => {
  return (
    <ul className='Logos'>
        <LogoItems src={Hoolie} />
        <LogoItems src={Lyft} />
        <LogoItems src={Pypire} />
        <LogoItems src={Stripe} />
        <LogoItems src={AWS} />
        <LogoItems src={Reddit} />
    </ul>
  )
}

export default Logos