import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

class MenuBar extends Component {
    render() { 
        return (
            <nav className='navbar navbar-expand-lg bg-danger'>
                <div className='container-fluid'>
                    <span className='navbar-brand text-white'>Nutritive</span>
                    <div className='justify-content-end mx-2'>
                        {
                            this.props.status === 0 ?
                            <div>
                                <button className='btn btn-dark mx-1'>
                                    <Link to="/signup" className='text-white text-decoration-none'>Sign up</Link>
                                </button>
                                <button className='btn btn-dark mx-1'>
                                    <Link to="/signin" className='text-white text-decoration-none'>Sign in</Link>
                                </button>
                            </div>
                            : <span style={{'font-size': '1.6em'}}>Hello, {this.props.firstname}</span>
                        }
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default MenuBar;