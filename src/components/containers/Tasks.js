import React, { Component } from 'react'
import { CreateTask } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions' 

class Task extends Component {

  getTasks() {
    if (this.props.tasks[this.props.tasks.selectedCategory]) {
      return
    }

    this.props.fetchTasks({category: this.props.tasks.selectedCategory})
    .then(tasks => {

    })
    .catch(err => {
      alert(err)
    })
  }

  componentDidMount() {
    this.getTasks()
  }

  componentDidUpdate() {
    this.getTasks()
  }

  createTask(task) {
    this.props.createTask(task)
    .then(task => {

    })
    .catch(err => {
      alert(err)
    })
  }

  render(){

    return (
      <div>
        <h2>Tasks</h2>

        <ol>
          { (this.props.tasks[this.props.tasks.selectedCategory] == null) ? null :
            this.props.tasks[this.props.tasks.selectedCategory].map((task, i) => {
              return <li key={task.id}>{task.title}</li>
            })
          }
        </ol>

        <CreateTask onSubmitTask={this.createTask.bind(this)} />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    tasks: state.task
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchTasks: (params) => dispatch(actions.fetchTasks(params)),
    createTask: (params) => dispatch(actions.createTask(params))  
  }
}


export default connect(stateToProps, dispatchToProps)(Task)