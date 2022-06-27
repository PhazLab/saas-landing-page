import React from 'react'
import Button from '../Button'
import './Intro.css'

const Intro = () => {
  return (
    <div className='Intro'>
      <h3>Real Estate</h3>
        <h1>Find Your Best Modern Home <br /> Buy or Rent Easily</h1>
        <p>
          HavHome manages many houses in several places,
          so all of you who want to buy and rent may easily find
          the property that is suitable for your own needs.
        </p>
        <div className='cta_btn'>
          <Button text="Buy"/>
          <Button text="Rent"/>
        </div>
    </div>
  )
}

export default Intro