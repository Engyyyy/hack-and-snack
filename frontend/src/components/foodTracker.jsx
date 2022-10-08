import React, { Component } from 'react';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';

class FoodTracker extends Component {
    render() { 
        return (
            <div>
                <MenuBar status={1} firstname='Engy' />
                <SearchBar />
            </div>
        );
    }
}
 
export default FoodTracker;