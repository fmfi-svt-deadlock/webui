import API_URL from '../API_URL.js'

var event_to_action_map = {}

export const event_to_action = (event, action) => {
    event_to_action_map[event] = action
    console.log('registered event to action:', event, action)
}

export const init = (dispatch) => {
    let source = new EventSource(API_URL+'/events')
    source.onmessage = (e) => {
        console.log('EventSource received event:', e)
        let action = event_to_action_map[e.data]
        if (action) return dispatch(action)
    }
}

