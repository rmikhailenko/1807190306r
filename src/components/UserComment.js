import React, {Component} from 'react'

class UserComment extends Component {
  render () {
    const {item} = this.props
    return (
      <ul className='user-comments__list'>
        <li className='user-comments__name'>{item.name}</li>
        <li className='user-comments__date'>{item.date}</li>
        <li className='user-comments__text'>{item.text}</li>
      </ul>
    )
  }
}

export default UserComment
