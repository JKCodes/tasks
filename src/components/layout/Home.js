import React, { Component } from 'react'
import { Tasks } from '../containers'

class Home extends Component {
  render(){
    return (
      <div className="row">
       
        <div className="col-md-4">
          Categories
        </div>

        <div className="col-md-4">
          <Tasks />
        </div>
      </div>
    )
  }
}

export default Home