import React, { Component } from 'react';
import MenuBar from './MenuBar';

class MealPlanner extends Component {
    render() { 
        return (
            <div>
                <MenuBar status={1} firstname='Engy' />
            </div>
        );
    }
}
 
export default MealPlanner;