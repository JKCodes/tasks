import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import { Home, Split, ProfileLayout } from './components/layout'
import { Provider } from 'react-redux'
import store from './stores'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const initialState = window.__PRELOADED_STATE__

const app = (
	<Provider store={ store.configureStore(initialState) }>
		<Router history={browserHistory}>
			<Route path='/' component={Main}>
				<IndexRoute component={Home} />
				<Route path="/task/:id" component={Split} />
				<Route path="/profile/:id" component={ProfileLayout} />
			</Route>
		</Router>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))