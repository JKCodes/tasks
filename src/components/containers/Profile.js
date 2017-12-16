import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Profile extends Component {
	componentDidMount(){

	const id = this.props.params.id
	if (this.props.profiles[id] != null)
		return

	this.props.fetchProfile(id)
	

	}

	render(){
		const profile = this.props.profiles[this.props.params.id]
		
		return (profile == null) ? <div>Not found</div> : (
			<div>
				<h2>{profile.username}'s Profile</h2>
				<h3>Username: {profile.username}</h3>
				<h3>Email: {profile.email}</h3>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		
		profiles: state.profile
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchProfile: (id) => dispatch(actions.fetchProfile(id))
	}
}


export default connect(stateToProps, dispatchToProps)(Profile)