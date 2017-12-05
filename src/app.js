import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components/layout/'

const app = (
  <div>
    React entry
    <Home />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))