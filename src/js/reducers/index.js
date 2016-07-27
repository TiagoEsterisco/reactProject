import { combineReducers } from 'redux'

import events from './eventReducer'
import filters from './filterReducer'

export default combineReducers({
    events,
    filters
})
