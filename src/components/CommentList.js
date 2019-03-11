import React from 'react'
import UserComment from './UserComment'

export default function CommentList ({ items }) {
  const itemElements = items.map(item =>
    <li key={item.id}><UserComment item={item} /></li>
  )
  return (
    <div>
      {itemElements}
    </div>
  )
}
