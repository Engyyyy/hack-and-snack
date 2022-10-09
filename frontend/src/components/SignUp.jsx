import React, { Component } from 'react'
import './styles/SignUp.css'
class SignUp extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    bmi: 0,
    pref: 0,
    birthday: '',
  }

  handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type='text'
            placeholder='First Name'
            value={this.state.firstname}
            onChange={(event) =>
              this.setState({ firstname: event.target.value })
            }
          />
          <input
            required
            type='text'
            placeholder='Last Name'
            value={this.state.lastname}
            onChange={(event) =>
              this.setState({ lastname: event.target.value })
            }
          />

          {/* <label>Username:</label> */}
          <input
            required
            type='text'
            value={this.state.username}
            placeholder='Username'
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          />

          {/* <label>Password:</label> */}
          <input
            required
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <br></br>
          <label>BMI:</label>
          <input
            required
            type='number'
            value={this.state.bmi}
            onChange={(event) => this.setState({ bmi: event.target.value })}
          />

          <label>
            Would you like to use the app as a meal planner or a food tracker?:
          </label>
          <br></br>
          <input
            required
            type='radio'
            name='preference'
            onChange={() => this.setState({ pref: 1 })}
          />
          <label>Meal Planner</label>
          <input
            type='radio'
            name='preference'
            onChange={() => this.setState({ pref: 2 })}
          />
          <label>Food Tracker</label>
          <br></br>

          <label>Birthday:</label>
          <input
            type='date'
            value={this.state.birthday}
            onChange={(event) =>
              this.setState({ birthday: event.target.value })
            }
          />
          <br></br>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp
