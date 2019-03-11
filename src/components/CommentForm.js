import React, {Component} from 'react'

class CommentForm extends Component {
  state = {
    comments: [],
    form: {
      name: '',
      comment: ''
    }
  }

  componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state')) })
    }
  }

  addComment = () => {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
          name: this.state.form.name,
          comment: this.state.form.comment,
          date: new Date()
        }
      ],
      form: {
        name: '',
        comment: ''
      }
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <section className='add-comment'>
        {this.state.comments.map(comment => <div key={comment.id}>
      <ul className='user-comments__list'>
        <li className='user-comments__name'>Новый пользователь</li>
        <li className='user-comments__date'>Сеодня</li>
        <li className='user-comments__text'>{comment.comment}</li>
      </ul>
        </div>)}
        <div className='wrapper'>
        <form className='comment-form'>
          <textarea className='comment-form__input' name="comment" value={this.state.form.comment} onChange={this.handleChange} />
          <input className='comment-form__submit' onClick={this.addComment} value='Написать консультанту' />
          </form>
        </div>   
      </section>
    )
  }
}

export default CommentForm
