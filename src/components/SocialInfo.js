import React, { Component } from 'react'
import CommentImage from '../img/comment.svg'
import LikeImage from '../img/like.svg'

class SocialInfo extends Component {
  render () {
    return (
      <div className='social-list'>
        <a href='#top' className='social-list__btn'><img src={CommentImage} className='social-list__img' alt='comment' />131</a>
        <a href='#top' className='social-list__btn'><img src={LikeImage} className='social-list__img' alt='like' />141</a>
      </div>
    )
  }
}

export default SocialInfo
