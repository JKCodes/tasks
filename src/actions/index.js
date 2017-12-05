import constants from '../constants'
import { APIManager } from '../utils'

export default {

  fetchTasks: (params) => {
    return (dispatch) => {
      APIManager
      .get('/api/task', params)
      .then(response => {
        dispatch({
          type: constants.TASKS_RECEIVED,
          tasks: response.results
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  },

  taskCreated: (params) => {
    return (dispatch) => {
      APIManager
      .post('/api/task', params)
      .then(response => {
        dispatch({
          type: constants.TASK_CREATED,
          task: response.result
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}