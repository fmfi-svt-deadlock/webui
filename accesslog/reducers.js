/*
state shape:

is_fetching :: bool
records     :: array of records
*/

// action môže byť (dispatch) -> action

import { handleActions } from 'redux-actions'
import { m } from '../common/utils.js'

const default_state = { is_fetching: false, records: [] }

export const accesslog = handleActions({
    'accesslog/REQUEST': (state, action) => m(state, {is_fetching: true}),
    'accesslog/RECEIVE': (state, action) => ({is_fetching: false, records: action.payload}),
}, default_state)

export default accesslog
