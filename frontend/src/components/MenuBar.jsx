import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class MenuBar extends Component {
    state = { 
        status: 0
     } 
    render() { 
        return (
            <div>
                <h4>Nutritive</h4>
                <button>
                    <Link to="/signup">Sign up</Link>
                </button>
                <button>
                    <Link to="/signin">Sign in</Link>
                </button>
            </div>
        );
    }
}
 
export default MenuBar;