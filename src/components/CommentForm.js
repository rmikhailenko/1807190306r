import React, {Component} from 'react'

class CommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Новый пользователь',
      date: 'сегодня',
      text: ''
    }

    this.onCommentAdd = this.onCommentAdd.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (event) {
    let parsState = JSON.stringify(this.state)
    localStorage.setItem('comm', parsState)
    event.preventDefault()
  }
  onCommentAdd (event) {
    this.setState({text: event.target.value})
  }

  // if someone reads this and doen't understand why
  // the component sends a comment to localstorage and
  // doesn’t do anything else, you should know that
  // I didn’t have enough skills to render it back.
  //  I know how to make a JSON.parse and request an object by key from the localstorege,
  //   but I have no idea where to implement it

  render () {
    return (
      <section className='add-comment'>
        <div className='wrapper'>
          <form onSubmit={this.onSubmit} className='comment-form'>
            <textarea className='comment-form__input' name='comment-text' placeholder='' value={this.state.text} onChange={this.onCommentAdd} />
            <input className='comment-form__submit' type='submit' value='Написать консультанту' />
          </form>
        </div>
      </section>
    )
  }
}

export default CommentForm
