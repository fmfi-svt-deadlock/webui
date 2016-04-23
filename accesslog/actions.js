import { createAction } from 'redux-actions'
import { myfetch } from '../utils/utils.js'

export const request = createAction('accesslog/REQUEST')
export const receive = createAction('accesslog/RECEIVE')

export const update_data = myfetch('/accesslog', request(), receive)
