import constants from '../constants'

var initialState = {
  all: null
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)
  let updatedAll = (updated['all']) ? Object.assign([], updated.all) : []

  switch (action.type) {

    case constants.TASKS_RECEIVED:
      updated['all'] = action.tasks

      return updated

    case constants.TASK_CREATED:
      updatedAll.unshift(action.task)
      updated['all'] = updatedAll

      return updated

    default:
      return state
  }
}