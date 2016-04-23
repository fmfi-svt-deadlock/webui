import API_URL from '../API_URL.js'

import { createAction } from 'redux-actions'

export const init = (dispatch) => {
    let source = new EventSource(API_URL+'/events')
    source.onmessage = (e) => {
        console.log('EventSource received event:', e)
        return dispatch(createAction('sse/EVENT/'+e.data)())  // TODO type and data?
    }
}
