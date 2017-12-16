import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import { Authenticate } from '../view'
import { Link } from 'react-router'


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
			swal({
			  title: "Authentication Error",
			  text: err.message,
			  type: "error"
			})
		})
	}

	logout() {
		this.props.logout(null)
		.then(response => {

		})
		.catch(err => {
			swal({
			  title: "An unexpected error has occurred",
			  text: "Please try again.",
			  type: "error"
			})
		})
	}

	register(credentials){
		this.props.register(credentials)
		.then(response => {

		})
		.catch(err => {
			swal({
			  title: "Registration Error",
			  text: err.message,
			  type: "error",
			})
		})
	}

	render(){
		return (
			<div style={{padding: 24}}>
				{ (this.props.user == null) ? <Authenticate onLogin={this.authenticate.bind(this)} onRegister={this.register.bind(this)} /> :
					<div>
						<h2> Hello <Link to={'/profile/'+this.props.user.id}>{this.props.user.username}</Link></h2>
						<button onClick={this.logout.bind(this)}>Logout</button><br /><br />
					</div>
				}

			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		user: state.account.user // can be null
	}
}

const dispatchToProps = (dispatch) => {
	return {
		register: (credentials) => dispatch(actions.register(credentials)),
		login: (credentials) => dispatch(actions.login(credentials)),
		logout: (params) => dispatch(actions.logout(params)),
		checkCurrentUser: () => dispatch(actions.checkCurrentUser())
	}
}

export default connect(stateToProps, dispatchToProps)(Account)



