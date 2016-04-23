/*
state shape:

is_fetching :: bool
records     :: array of records
*/

// action môže byť (dispatch) -> action

import { handleActions } from 'redux-actions'
import { m } from '../utils/utils.js'

const default_state = { is_fetching: false, records: [] }

export const accesslog = handleActions({
    'accesslog/REQUEST': (state, action) => m(state, {is_fetching: true}),
    'accesslog/RECEIVE': (state, action) => {
        let records = action.payload.map(r => m(r, {time: Date.parse(r.time)}))
        return {is_fetching: false, records: records}
    },
}, default_state)

export default accesslog
