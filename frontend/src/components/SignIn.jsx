import React, { Component } from 'react';

class SignIn extends Component {

    state = {
        username: '',
        password: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() { 
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
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
                        type="text"
                        value={this.state.password}
                        onChange={(event) => this.setState({password: event.target.value})} />
                    </div>
                    <input type="submit" value="sign in" />
                </form>
            </div>
        );
    }
}
 
export default SignIn;