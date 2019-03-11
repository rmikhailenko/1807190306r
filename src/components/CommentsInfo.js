import React, {Component} from 'react'
import SocialInfo from './SocialInfo'

class CommentsInfo extends Component {
  render () {
    return (
      <div className='comments-info'>
        <h3 className='comments-info__last'>Последние отзывы</h3>
        <a className='comments-info__all' href='#top'>Все отзывы</a>
        <SocialInfo />
      </div>
    )
  }
}

export default CommentsInfo
