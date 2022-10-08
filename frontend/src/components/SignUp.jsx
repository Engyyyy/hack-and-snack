import React, { Component } from 'react';

class SignUp extends Component {

    state = {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        bmi: 0,
        pref: 0,
        birthday: ''

    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    }

    render() { 
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input required
                        type="text" 
                        value={this.state.firstname} 
                        onChange={(event) => this.setState({firstname: event.target.value})} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input  required
                        type="text"
                        value={this.state.lastname}
                        onChange={(event) => this.setState({lastname: event.target.value})} />
                    </div>
                    <div>
                        <label>Username:</label>
                        <input required
                        type="text"
                        value={this.state.username}
                        onChange={(event) => this.setState({username: event.target.value})} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input required
                        type="password"
                        value={this.state.password}
                        onChange={(event) => this.setState({password: event.target.value})} />
                    </div>
                    <div>
                        <label>BMI:</label>
                        <input required
                        type="number"
                        value={this.state.bmi}
                        onChange={(event) => this.setState({bmi: event.target.value})} />
                    </div>
                    <div>
                        <label>Would you like to use the app as a meal planner or a food tracker?:</label>
                        <input required
                        type="radio" 
                        name="preference" 
                        onChange={() => this.setState({pref: 1})}/>
                        <label>Meal Planner</label>
                        <input 
                        type="radio" 
                        name="preference"
                        onChange={() => this.setState({pref: 2})}/>
                        <label>Food Tracker</label>
                    </div>
                    <div>
                        <label>Birthday:</label>
                        <input 
                        type="date"
                        value={this.state.birthday}
                        onChange={(event) => this.setState({birthday: event.target.value})} />
                    </div>
                    <input type="submit" value="sign up"/>
                </form>
            </div>
        );
    }

}
 
export default SignUp;