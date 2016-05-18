/*
state shape:

language :: string
*/

import { handleActions } from 'redux-actions'
import { m } from '../common/utils.js'

import {load_state, save_state} from './settings.js'

export const settings = handleActions({
    'settings/CHANGE': (state, action) => {
        let newstate = m(state, action.payload)
        save_state(newstate)
        return newstate
    },
}, load_state())

export default settings
