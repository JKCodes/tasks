import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions' 
import { Authenticate } from '../view'

class Account extends Component {

  authenticate(credentials){
    this.props.login(credentials)
    .then(response => {

    })
    .catch(err => {
      alert(err.message)
    })
  }

  register(credentials) {
    this.props.register(credentials)
  }

  render(){

    return (
      <div>
        <h2>Account</h2>
        
        <Authenticate 
          onLogin={this.authenticate.bind(this)}
          onRegister={this.register.bind(this)} 
        />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    register: (credentials) => disptach(actions.register(credentials)),
    login: (credentials) => disptach(actions.login(credentials)),
    checkCurrentUser: () => disptach(actions.checkCurrentUser())
  }
}


export default connect(stateToProps, dispatchToProps)(Account)