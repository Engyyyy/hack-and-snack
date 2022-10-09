import React, { Component } from 'react'
import './styles/SignIn.css'
class SignIn extends Component {
  state = {
    username: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            required
            type='text'
            placeholder='Username'
            value={this.state.username}
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          />
          <input
            required
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <button>Signin</button>
        </form>
      </div>
    )
  }
}

export default SignIn
