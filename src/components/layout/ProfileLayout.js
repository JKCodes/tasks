import React, { Component } from 'react'
import { Profile, Account, Categories } from '../containers'

class ProfileLayout extends Component {
	render(){
		return(
			<div id="wrapper">
				<div id="main">
					<div className="inner">
							<header id="header">
								<a href="/" className="logo"><strong>Twilio Tasks</strong></a>
							</header>
							<Profile {...this.props} />
					</div>
				</div>		
				<div id="sidebar">
					<Account />
					<Categories />
				</div>
			</div>
		)
	}
}

export default ProfileLayout