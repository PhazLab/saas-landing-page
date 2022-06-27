import React from 'react'

const ContentItem = ({title, content}) => {
  return (
    <li>
        <h3 className='title_content'>{title}</h3>
        <p className='content'>{content}</p>
    </li>
  )
}

export default ContentItem