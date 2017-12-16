import React, { Component } from 'react'

class Authenticate extends Component {
	constructor(){
		super()
		this.state = {
			credentials: {
				username: '',
				phone: '',
				email: '',
				password: ''
			}
		}
	}

	updateCredentials(field, event){
		let updated = Object.assign({}, this.state.credentials)
		updated[field] = event.target.value
		this.setState({
			credentials: updated
		})
	}

	register(event){
		if(this.state.credentials.username.length == 0){
			swal({
			  title: "Oops!",
			  text: "You forgot a username!",
			  type: "error",
			})

			return
		}
		if(this.state.credentials.email.length == 0){
			swal({
			  title: "Oops!",
			  text: "You forgot an email!",
			  type: "error",
			})

			return
		}
		if(this.state.credentials.username.phone == 0){
			swal({
			  title: "Oops!",
			  text: "You forgot a phone number!",
			  type: "error",
			})

			return
		}
		if(this.state.credentials.username.password == 0){
			swal({
			  title: "Oops!",
			  text: "You forgot a password!",
			  type: "error",
			})

			return
		}
		this.props.onRegister(this.state.credentials)
	}

	login(event){
		if(this.state.credentials.email.length == 0){
			swal({
			  title: "Oops!",
			  text: "You forgot your email address!",
			  type: "error",
			})

			return
		}
		if(this.state.credentials.password.length == 0){
			swal({
			  title: "Oops!",
			  text: "You forgot your password!",
			  type: "error",
			})
			return
		}
	this.props.onLogin(this.state.credentials)
	}

	render(){
		return (
			<div>
				<header className="major">
					<h2>Account</h2>
				</header>

				<h3>Sign Up</h3>
				<input onChange={this.updateCredentials.bind(this, 'username')} type="text" placeholder="Username" /><br />
				<input onChange={this.updateCredentials.bind(this, 'phone')} type="text" placeholder="Phone" /><br />
				<input onChange={this.updateCredentials.bind(this, 'email')} type="email" placeholder="Email" /><br />
				<input onChange={this.updateCredentials.bind(this, 'password')} type="password" placeholder="Password" /><br />
				<button onClick={this.register.bind(this)}>Join</button><br /><br />

				<h3>Log In</h3>
				<input onChange={this.updateCredentials.bind(this, 'email')} type="email" placeholder="Email" /><br />
				<input onChange={this.updateCredentials.bind(this, 'password')} type="password" placeholder="Password" /><br />
				<button onClick={this.login.bind(this)}>Login</button>
			</div>
		)
	}
}


export default Authenticate