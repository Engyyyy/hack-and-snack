import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class SearchBar extends Component {
    state = { 
        value: ''
     } 
    render() { 
        return (
            <div className='d-flex container-fluid justify-content-center my-2'>
                <div className='row w-75'>
                    <input 
                    placeholder='Search...' 
                    className='col-10'
                    value={this.state.value}
                    onChange={(event) => this.setState({value: event.target.value})} />
                    <button className='col btn btn-dark'>Search</button>
                </div>
                
            </div>
        );
    }
}
 
export default SearchBar;