import React, { Component } from 'react'
import { Tasks, Task, Categories, Account } from '../containers'


class Home extends Component {
	render(){
		return (	
			<div id="wrapper">
				<div id="main">
					<div className="inner">
							<header id="header">
								<a href="/" className="logo"><strong>Twilio Tasks</strong></a>
							</header>
							<Tasks />
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

export default Home

