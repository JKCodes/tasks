import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions' 
import { Authenticate } from '../view'

class Account extends Component {

  login(credentials) {

  }

  register(credentials) {

  }

  render(){

    return (
      <div>
        <h2>Account</h2>
        
        <Authenticate 
          onLogin={this.login.bind(this)}
          onRegister={this.register.bind(this)} 
        />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {

  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(stateToProps, dispatchToProps)(Account)