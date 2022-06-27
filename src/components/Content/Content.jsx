import React from 'react'
import './Content.css'
import ContentItem from './ContentItem'
const Content = () => {
  return (
    <ul className='content_items'>
        <ContentItem title="10+" content="Years Of Experience" />
        <ContentItem title="1000" content="Apartments" />
        <ContentItem title="20" content="Awards Gained" />
    </ul>
  )
}

export default Content