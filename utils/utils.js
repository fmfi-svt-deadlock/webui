import API_URL from '../API_URL.js'

export const m = (old, over) => Object.assign({}, old, over)

export function fetch_with_actions(url, action_before, action_creator_after) {
    return function(dispatch) {
        dispatch(action_before)
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(action_creator_after(json)))
    }
}

export const myfetch = (path, before, after) => fetch_with_actions(API_URL+path, before, after)
