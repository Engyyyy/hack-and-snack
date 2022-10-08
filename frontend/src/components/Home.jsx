import React, { Component } from 'react';
import MenuBar from './MenuBar';

class Home extends Component {
    render () {
        return(
            <div className="App">
            <MenuBar status={0} />
            <div>
                <p>A Healthy Life starts from a healthy diet!</p>
                <p>Join us now to track your nutrients and have a healthy diet plan!</p>
            </div>
            </div>
        );
    }
}
 
export default Home;