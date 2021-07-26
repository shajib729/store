import { createStore, combineReducers } from 'redux'
import usersReducers from './reducers/usersReducers'

const rootReducer = combineReducers({
    products:usersReducers
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store