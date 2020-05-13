import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import preloader from './preloader'
import nearby from './nearby'

const rootReducer = log => combineReducers({
  preloader,
  nearby,
  router: connectRouter(log)
})

export default rootReducer