import React, { Component } from 'react'
import { Tasks } from '../containers'

class Home extends Component {
  render(){
    return (
      <div>
        Home
        <Tasks />
      </div>
    )
  }
}

export default Home