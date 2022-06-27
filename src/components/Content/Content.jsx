import React from 'react'
import './Content.css'
import ContentItem from './ContentItem'
const Content = () => {
  return (
    <ul className='content_items'>
        <ContentItem title="10%" content="Test add content" />
        <ContentItem title="10%" content="Test add content" />
        <ContentItem title="10%" content="Test add content" />
    </ul>
  )
}

export default Content