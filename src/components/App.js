import React, { Component } from 'react'
import Avatar from './Avatar'
import ServiceList from './ServiceList'
import CommentsInfo from './CommentsInfo'
import '../style/main.css'
import CommentList from './CommentList'
import items from './List'
import CommentForm from './CommentForm'

class App extends Component {
  render () {
    return (
      <div className='content'>
        <div className='wrapper'>
          <Avatar />
          <ServiceList />
          <CommentsInfo />
          <CommentList items={items} />
          <CommentForm />
        </div>
      </div>
    )
  }
}

export default App
