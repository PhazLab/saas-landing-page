import React from 'react'

const LogoItems = ({src, alt}) => {
  return (
    <li>
        <img src={src} alt={alt} />
    </li>
  )
}

export default LogoItems