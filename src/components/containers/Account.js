import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions' 
import { Authenticate } from '../view'

class Account extends Component {

  componentDidMount(){
    if (this.props.user != null)
      return

    this.props.checkCurrentUser()
    .then(response => {

    })
    .catch(err => {
      console.log('ERROR: '+err.message)
    })
  }

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
      <div style={{padding: 24}}>
        <h2>Account</h2>
        { (this.props.user == null) ? <Authenticate onLogin={this.authenticate.bind(this)} onRegister={this.register.bind(this)} /> :
          <h2> Hello {this.prpos.user.username}</h2>
        }

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
    register: (credentials) => dispatch(actions.register(credentials)),
    login: (credentials) => dispatch(actions.login(credentials)),
    checkCurrentUser: () => dispatch(actions.checkCurrentUser())
  }
}


export default connect(stateToProps, dispatchToProps)(Account)