import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { CreateTask } from '../view'

class Task extends Component {

  componentDidMount() {
    APIManager
    .get('/api/task', null)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }

  createTask(task) {
    APIManager
    .post('/api/task', task)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){

    return (
      <div>
        Tasks Container
        <CreateTask onSubmitTask={this.createTask.bind(this)} />
      </div>
    )
  }
}

export default Task


