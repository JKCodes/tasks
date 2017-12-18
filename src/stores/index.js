import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { taskReducer, accountReducer, messageReducer, profileReducer } from '../reducers'

var store;

export default {
	configureStore: (initial) => {
		const reducers = combineReducers({
			task: taskReducer,
			account: accountReducer,
			message: messageReducer,
			profile: profileReducer
		})

		store = createStore(
			reducers,
			initial,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}