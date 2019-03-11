import React, { Component } from 'react'
import ManagerProfileAvatar from '../img/avatar.png'

class Avatar extends Component {
  render () {
    return (
      <div className='manager-profile'>
        <div className='manager-profile__image'>
          <img src={ManagerProfileAvatar} alt='avatar' />
        </div>
        <h3 className='manager-profile__name'>Вероника Ростова</h3>
        <span className='manager-profile__position'>Менеджер по продажам</span>
        <div className='manager-profile__post'>
              Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны
        </div>
      </div>
    )
  }
}

export default Avatar
