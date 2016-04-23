/*
state shape:

is_fetching :: bool
records     :: array of records
*/

import { handleActions } from 'redux-actions'
import { m } from '../utils/utils.js'

import { update_data } from './actions.js'

const default_state = { is_fetching: false, records: [] }

export const accesslog = handleActions({
    'accesslog/REQUEST': (state, action) => m(state, {is_fetching: true}),
    'accesslog/RECEIVE': (state, action) => {
        let records = action.payload.map(r => m(r, {time: Date.parse(r.time)}))
        return {is_fetching: false, records: records}
    },
    'sse/EVENT/accesslog_update': (state, action) => ((dispatch) => { update_data(dispatch); return state }),
}, default_state)

export default accesslog
