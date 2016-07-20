import { combineReducers } from 'redux'
import inverted from './inverted'
import text from './text'

const reducers = combineReducers({
  inverted,
  text
})

export default reducers
