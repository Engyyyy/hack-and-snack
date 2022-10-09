import React, { Component } from 'react'
import MenuBar from './MenuBar'
import 'bootstrap/dist/css/bootstrap.css'

class Home extends Component {
  render() {
    return (
      <div className='App h-100'>
        <MenuBar status={0} />
        <div className='d-flex h-100 align-items-center'>
          <div className='w-50'>Image</div>
          <div className='mx-5'>
            <p className='display-3 font-weight-bold'>
              A Healthy Life starts from a healthy diet!
            </p>
            <p className='lead'>
              Join us now to track your nutrients and have a healthy diet plan!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
