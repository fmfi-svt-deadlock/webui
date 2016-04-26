/*
state shape:

is_fetching :: bool
records     :: array of records
*/

import { handleActions } from 'redux-actions'
import { m } from '../common/utils.js'

const default_state = { is_fetching: false, records: [] }

export const status = handleActions({
    'status/REQUEST': (state, action) => m(state, {is_fetching: true}),
    'status/RECEIVE': (state, action) => ({is_fetching: false, records: action.payload}),
}, default_state)

export default status
