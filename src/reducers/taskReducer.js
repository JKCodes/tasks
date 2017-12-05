import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type) {

    case constants.TASKS_RECEIVED:
      console.log(action.tasks)
      return updated

    case constants.TASK_CREATED:

      return updated

    default:
      return state
  }
}