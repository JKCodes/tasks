import React, { Component } from 'react'
import { CreateTask } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions' 

class Task extends Component {

  componentDidMount() {
    this.props.fetchTasks(null)
  }

  createTask(task) {
    this.props.createTask(task)
  }

  render(){

    return (
      <div>
        <h2>Tasks</h2>

        <ol>
          { (this.props.tasks.all == null) ? null :
            this.props.tasks.all.map((task, i) => {
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