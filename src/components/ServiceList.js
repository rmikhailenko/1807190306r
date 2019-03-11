import React, {Component} from 'react'

class ServiceList extends Component {
  render () {
    return (
      <div className='services-list'>

        <div className='services-list__title'>Услуг</div>

        <table className='services'>
          <tbody>
            <tr>
              <td className='services-list__item'>
                <span className='services-list__description'>Ручное бронирование</span>
                <div className='services-list__line' style={{width: '100%', backgroundColor: '#b1e19b'}} />
              </td>
              <td className='services-list__count'>11</td>
            </tr>
            <tr>
              <td className='services-list__item'>
                <span className='services-list__description'>Пакетные туры</span>
                <div className='services-list__line' style={{width: '25%', backgroundColor: '#ace2f8'}} />
              </td>
              <td className='services-list__count'>3</td>
            </tr>
            <tr>
              <td className='services-list__item'>
                <span className='services-list__description'>Отели</span>
                <div className='services-list__line' style={{width: '5%', backgroundColor: '#ace2f8'}} />
              </td>
              <td className='services-list__count'>1</td>
            </tr>
          </tbody>
        </table>

        <div className='services-list__total'>
          <div className='services-list__all'>Всего</div>
          <div className='services-list__count'>15</div>
        </div>
      </div>
    )
  }
}

export default ServiceList
